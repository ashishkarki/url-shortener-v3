const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const { URL_ID_LENGTH } = require('../utils/constants')

const UrlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
    },
    // shortUrl: { // baseUrl + urlId
    //     type: String,
    //     required: true,
    // },
    urlId: {
        type: String,
        required: true,
        default: nanoid(URL_ID_LENGTH),
    },
})

module.exports = mongoose.model('Url', UrlSchema)