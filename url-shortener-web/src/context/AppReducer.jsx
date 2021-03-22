import { ACTION_TYPES } from './Actions'

const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_URLS:
      return {
        ...state,
        loading: false,
        urls: action.payload,
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
