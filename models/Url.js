const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const UrlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    // baseUrl + urlId
    type: String,
  },
  urlId: {
    type: String,
    required: true,
    default: nanoid(10),
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Url', UrlSchema)
