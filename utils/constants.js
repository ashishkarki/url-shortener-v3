const DEFAULT_SERVER_PORT = 5000

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
  NODE_ENV_OPTIONS,
  POST_REQUEST_COFIG,
}
