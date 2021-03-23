const API_BASE_URI = '/api/v3/urls'

const POST_REQUEST_COFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
}

const TOAST_TYPES = {
  SUCCESS: 'Sucess Message',
  ERROR: 'Some error Message',
  DEFAULT: '',
}

const TOAST_MESSAGES = {
  SHORT_URL_DISPLAY: {
    COPY_SUCCESS: 'Short Url Copied to Clipboard!',
    COPY_ERROR: 'Error in copying to Clipboard!',
  },
}

module.exports = {
  API_BASE_URI,
  POST_REQUEST_COFIG,
  TOAST_TYPES,
  TOAST_MESSAGES,
}
