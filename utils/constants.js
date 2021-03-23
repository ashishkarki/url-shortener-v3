const DEFAULT_SERVER_PORT = 5000

const API_BASE_URI = '/api/v3/urls'

const NODE_ENV_OPTIONS = {
  DEV: 'development',
  PROD: 'production',
}

const POST_REQUEST_COFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
}

module.exports = {
  DEFAULT_SERVER_PORT,
  API_BASE_URI,
  NODE_ENV_OPTIONS,
  POST_REQUEST_COFIG,
}
