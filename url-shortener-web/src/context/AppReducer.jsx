import { ACTION_TYPES } from './Actions'

const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_URLS:
      return {
        ...state,
        loading: false,
        urls: action.payload,
      }

    case ACTION_TYPES.SHORTEN_URL:
      return {
        ...state,
        loading: false,
        urls: [action.payload, ...state.urls],
      }

    case ACTION_TYPES.DELETE_URL:
      return {
        ...state,
        urls: state.urls.filter(url => url._id !== action.payload),
      }

    case ACTION_TYPES.URL_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    default:
      break
  }

  return state
}

export default AppReducer
