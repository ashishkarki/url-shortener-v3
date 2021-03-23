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

module.exports = {
  API_BASE_URI,
  POST_REQUEST_COFIG,
  TOAST_TYPES,
}
