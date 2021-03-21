const express = require('express')
const colors = require('colors')

const { NODE_ENV_OPTIONS, DEFAULT_SERVER_PORT }
    = require('./utils/constants')
const Url = require('./models/Url')
const connectToDB = require('./config/db-connect')

// connect to Mongo DB
connectToDB()

const app = express()
// body parser middleware
app.use(express.json())

/**
 * Description: get a list of all Shortened URLs`
 * Route: GET /
 */
app.get('/', async (req, res) => {
    try {
        const allShortenedUrls = await Url.find()

        return buildSuccessResponse(res, allShortenedUrls)
    } catch (error) {
        return buildErrorResponse(res, error)
    }
})

/**
 * Description: get/redirect the client to corresponding longUrl
 * Route: GET /:shortUrl
 */
app.get('/:shortUrl', async (req, res) => {
    try {
        const { shortUrl } = req.params
        const url = await Url.findOne({ urlId: shortUrl })

        return buildSuccessResponse(res, url.longUrl)
    } catch (error) {
        return buildErrorResponse(res, error)
    }
})

/**
 * Description: shorten a given longUrl with 10-character urlId or code
 * Route: POST /shorten
 */
app.post('/shorten', async (req, res) => {
    try {
        const { longUrl } = req.body
        const urlObj = await Url.create({ longUrl: longUrl })

        return buildSuccessResponse(res, urlObj.urlId)
    } catch (error) {
        return buildErrorResponse(res, error)
    }
})

const buildSuccessResponse = (res, responseData, statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        data: responseData,
    })
}

const buildErrorResponse = (res, error, statusCode = 500) => {
    return res.status(statusCode).json({
        success: false,
        error: `Error occured with reason: ${ error.message }`
    })
}

// set up the listening
const PORT = process.env.PORT || DEFAULT_SERVER_PORT
const NODE_ENV = process.env.NODE_ENV || NODE_ENV_OPTIONS.DEV

app.listen(
    PORT,
    () => console.log(`Server running in ${ NODE_ENV } mode on port ${ PORT }`.green.bold)
)