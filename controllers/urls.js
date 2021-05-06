const config = require('config')

const Url = require('../models/Url')

const BASE_URL = config.get('baseUrl')

/**
 * Description: get a list of all Shortened URLs`
 * Route: GET /api/v3/urls/
 */
exports.getAllShortenedUrls = async (_, res) => {
  try {
    const allShortenedUrls = await Url.find().sort({ createdAt: -1 })

    return buildSuccessResponse(res, allShortenedUrls)
  } catch (error) {
    return buildErrorResponse(res, error)
  }
}

/**
 * Description: get the constant value of Base url similar to https://<hostname>/
 * Route: GET /api/v3/urls/api_base_uri
 */
exports.getApiBaseUri = async (_req, res, _next) => {
  return buildSuccessResponse(res, BASE_URL)
}

/**
 * Description: get/redirect the client to corresponding longUrl
 * Route: GET /api/v3/urls/:shortUrl/lengthen
 */
exports.getLongUrl = async (req, res) => {
  try {
    const { urlId } = req.params
    const url = await Url.findOne({ urlId: urlId })

    //return buildSuccessResponse(res, url.longUrl)
    res.redirect(url.longUrl)
  } catch (error) {
    return buildErrorResponse(res, error, 404)
  }
}

/**
 * Description: Delete one Url entry from DB
 * Route: DELETE /api/v3/urls/:id
 */
exports.deleteUrl = async (req, res) => {
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
}

/**
 * Description: shorten a given longUrl with 10-character urlId or code
 * Route: POST /api/v3/urls/shorten
 */
exports.addUrl = async (req, res) => {
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
}

//// HELPER METHODS BELOW
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

const buildErrorResponse = (res, err, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    error: `${err.message}`,
  })
}
