const {
  NODE_ENV_OPTIONS,
  DEFAULT_SERVER_PORT,
  API_BASE_URI,
} = require('./utils/constants')

const UrlModel = require('../models/Url')

/**
 * Description: get a list of all Shortened URLs`
 * Route: GET /api/v3/urls/
 */
exports.getAllShortenedUrls = async (_, res, _) => {
  try {
    const allShortenedUrls = await Url.find().sort({ createdAt: -1 })

    return buildSuccessResponse(res, allShortenedUrls)
  } catch (error) {
    return buildErrorResponse(res, error)
  }
}

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
