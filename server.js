const express = require('express')
const colors = require('colors')
const config = require('config')

const BASE_URL = config.get('baseUrl')

const {
  NODE_ENV_OPTIONS,
  DEFAULT_SERVER_PORT,
  API_BASE_URI,
} = require('./utils/constants')
const Url = require('./models/Url')
const connectToDB = require('./config/db-connect')

// connect to Mongo DB
connectToDB()

const app = express()
// body parser middleware
app.use(express.json())

/**
 * Description: get a list of all Shortened URLs`
 * Route: GET /api/v3/urls/
 */
app.get(`${API_BASE_URI}/`, async (_, res) => {
  try {
    const allShortenedUrls = await Url.find().sort({ createdAt: -1 })

    return buildSuccessResponse(res, allShortenedUrls)
  } catch (error) {
    return buildErrorResponse(res, error)
  }
})

/**
 * Description: get/redirect the client to corresponding longUrl
 * Route: GET /api/v3/urls/:shortUrl/lengthen
 */
app.get(`${API_BASE_URI}/:shortUrl/lengthen`, async (req, res) => {
  try {
    const { shortUrl } = req.params
    const url = await Url.findOne({ urlId: shortUrl })

    return buildSuccessResponse(res, url.longUrl)
    //res.redirect(url.longUrl)
  } catch (error) {
    return buildErrorResponse(res, error)
  }
})

/**
 * Description: Delete one Url entry from DB
 * Route: DELETE /api/v3/urls/:id
 */
app.delete(`${API_BASE_URI}/:deletedId`, async (req, res) => {
  try {
    const { deletedId } = req.params

    const url = await Url.findById(deletedId)

    if (!url) {
      return res.status(404).json({
        success: false,
        error: `Error: Url Not Found!!`,
      })
    }

    await url.remove()

    return buildSuccessResponse(res, deletedId)
  } catch (error) {
    return buildErrorResponse(res, error)
  }
})

/**
 * Description: shorten a given longUrl with 10-character urlId or code
 * Route: POST /api/v3/urls/shorten
 */
app.post(`${API_BASE_URI}/shorten`, async (req, res) => {
  try {
    const { longUrl } = req.body

    // First confirm if the longUrl already exists in DB
    const existingUrl = await Url.findOne({ longUrl: longUrl })

    if (existingUrl) {
      return buildErrorResponse(
        res,
        {
          message: `LongUrl already converted at timestamp: ${existingUrl.createdAt}`,
        },
        403
      )
    }

    const urlObjWithoutShortUrl = await Url.create({ longUrl: longUrl })

    // insert shortUrl into this urlObjWithoutShortUrl
    await Url.updateOne(
      { _id: urlObjWithoutShortUrl._id },
      { shortUrl: `${BASE_URL}/${urlObjWithoutShortUrl.urlId}` }
    )
    const finalUrlObj = await Url.findById(urlObjWithoutShortUrl._id)

    return buildSuccessResponse(res, finalUrlObj)
  } catch (error) {
    return buildErrorResponse(res, error)
  }
})

const buildSuccessResponse = (res, responseData, statusCode = 200) => {
  let responseObj = {
    success: true,
  }

  if (Array.isArray(responseData)) {
    responseObj['count'] = responseData.length
    responseObj['data'] = responseData.map(eachRow => eachRow._doc)
  } else {
    responseObj['data'] = responseData
  }

  return res.status(statusCode).json(responseObj)
}

const buildErrorResponse = (res, error, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    error: `${error.message}`,
  })
}

// set up the listening
const PORT = process.env.PORT || DEFAULT_SERVER_PORT
const NODE_ENV = process.env.NODE_ENV || NODE_ENV_OPTIONS.DEV

app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.green.bold)
)
