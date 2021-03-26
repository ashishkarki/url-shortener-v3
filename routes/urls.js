const express = require('express')
const {
  getAllShortenedUrls,
  getApiBaseUri,
  getLongUrl,
  deleteUrl,
  addUrl,
} = require('../controllers/urls')
const router = express.Router()

router.route('/').get(getAllShortenedUrls)

router.route('/api_base_uri').get(getApiBaseUri)

router.route('/:urlId/lengthen').get(getLongUrl)

router.route('/:deletedId').delete(deleteUrl)

router.route('/shorten').post(addUrl)

module.exports = router
