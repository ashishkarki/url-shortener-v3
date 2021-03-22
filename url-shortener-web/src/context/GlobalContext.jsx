import { useReducer } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'
import { API_BASE_URI, POST_REQUEST_COFIG } from '../../../utils/constants'
import { ACTION_TYPES } from './Actions'

const initialState = {
  urls: [
    {
      _id: 1,
      longUrl: 'https://material-ui.com/api/form-label',
      shortUrl: 'http://localhost:5000/75RT509uEB',
      urlId: '75RT509uEB',
    },
  ],
  error: null,
  loading: true,
}

export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(AppReducer, initialState)

  // Dispatch Actions below:
  // TODO
  const getShortenedUrl = async longUrl => {
    try {
      const response = await axios.post(
        `${API_BASE_URI}/shorten`,
        longUrl,
        POST_REQUEST_COFIG
      )
    } catch (error) {}
  }

  // Get all Shortened Urls so far
  const getUrls = async () => {
    try {
      const response = await axios.get(API_BASE_URI)

      _dispatchAction(ACTION_TYPES.GET_URLS, response.data)
    } catch (error) {}
  }

  const _dispatchAction = (
    actionType = ACTION_TYPES.NONE,
    actionPayload = {}
  ) => {
    dispatch({
      type: actionType,
      payload: actionPayload,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        urls: globalState.urls,
        getUrls,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
