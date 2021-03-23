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
    COPY_ERROR: 'Error copying to Clipboard!',
    SHORTEN_SUCCESS: 'Short Url Creation Success!',
    SHORTEN_ERROR: 'Short Url Creation Error!',
  },
  URL_LIST_TABLE: {
    GET_ALL_URLS_ERROR: `Something prevented us from pulling all existing Urls`,
    DELETE_SUCCESS: `Url Row Entry Deleted!`,
    DELETE_ERROR: `Error Deleting Url Entry!`,
  },
}

module.exports = {
  API_BASE_URI,
  POST_REQUEST_COFIG,
  TOAST_TYPES,
  TOAST_MESSAGES,
}
