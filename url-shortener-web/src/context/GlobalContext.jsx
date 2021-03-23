import { useReducer } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'
import {
  API_BASE_URI,
  POST_REQUEST_COFIG,
  TOAST_TYPES,
} from '../utils/constants'
import { ACTION_TYPES } from './Actions'
import { useCallback } from 'react'

const initialState = {
  urls: [
    {
      _id: 1,
      longUrl: 'https://material-ui.com/api/form-label',
      shortUrl: 'http://localhost:5000/75RT509uEB',
      urlId: '75RT509uEB',
    },
  ],
  recentShortUrl: '',
  toastMessage: '',
  toastType: TOAST_TYPES.DEFAULT,
  error: null,
  loading: true,
}

export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(AppReducer, initialState)

  // Dispatch Actions below:
  const getShortenedUrl = async longUrl => {
    try {
      const response = await axios.post(
        `${API_BASE_URI}/shorten`,
        { longUrl: longUrl },
        POST_REQUEST_COFIG
      )

      dispatchAction(ACTION_TYPES.SHORTEN_URL, response.data.data)
    } catch (error) {
      dispatchAction(ACTION_TYPES.URL_ERROR, error)
    }
  }

  // Get all Shortened Urls so far
  const getUrls = useCallback(async () => {
    try {
      const response = await axios.get(API_BASE_URI)

      dispatchAction(ACTION_TYPES.GET_URLS, response.data.data)
    } catch (error) {
      dispatchAction(ACTION_TYPES.URL_ERROR, error)
    }
  }, [])

  const deleteUrl = async deletedId => {
    try {
      const response = await axios.delete(`${API_BASE_URI}/${deletedId}`)

      dispatchAction(ACTION_TYPES.DELETE_URL, response.data.data)
    } catch (error) {
      dispatchAction(ACTION_TYPES.URL_ERROR, error)
    }
  }

  const dispatchAction = (
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
        toastMessage: globalState.toastMessage,
        toastType: globalState.toastType,
        recentShortUrl: globalState.recentShortUrl,
        dispatchAction,
        getShortenedUrl,
        deleteUrl,
        getUrls,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
