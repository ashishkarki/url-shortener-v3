import { useEffect, createContext, useCallback, useReducer } from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'
import {
  API_BASE_URI,
  POST_REQUEST_COFIG,
  TOAST_MESSAGES,
  TOAST_TYPES,
} from '../utils/constants'
import { ACTION_TYPES } from './Actions'

const validUrl = require('valid-url')

const initialState = {
  urls: [
    {
      _id: 1,
      longUrl: 'https://material-ui.com/api/form-label',
      shortUrl: 'http://localhost:5000/75RT509uEB',
      urlId: '75RT509uEB',
    },
  ],
  baseUrl: '',
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
  const dispatchAction = (
    actionType = ACTION_TYPES.NONE,
    actionPayload = {}
  ) => {
    dispatch({
      type: actionType,
      payload: actionPayload,
    })
  }

  const dispatchToastAction = useCallback(
    (toastMessage = 'Info', toastType = TOAST_TYPES.DEFAULT) => {
      dispatchAction(ACTION_TYPES.SHOW_TOAST, {
        toastMessage: `${toastMessage}%${Date.now()}`,
        toastType: toastType,
      })
    },
    []
  )

  useEffect(() => {
    const source = axios.CancelToken.source()

    getBaseUrl()

    return () => {
      source.cancel()
    }
  })

  const getBaseUrl = async () => {
    try {
      const response = await axios.get(`${API_BASE_URI}/api_base_uri`)

      dispatchAction(ACTION_TYPES.GET_BASE_URL, response.data.data)
    } catch (error) {
      // send a fall back url
      dispatchAction(ACTION_TYPES.GET_BASE_URL_ERROR, error.response.data.error)
    }
  }

  const getShortenedUrl = async longUrl => {
    try {
      // Check if this is a valid URI
      if (!validUrl.isWebUri(longUrl)) {
        throw new Error(`URL is Invalid!!. Please enter well-formed URL.`)
      }

      const response = await axios.post(
        `${API_BASE_URI}/shorten`,
        { longUrl: longUrl },
        POST_REQUEST_COFIG
      )

      dispatchAction(ACTION_TYPES.SHORTEN_URL, response.data.data)

      dispatchToastAction(
        `${TOAST_MESSAGES.SHORT_URL_DISPLAY.SHORTEN_SUCCESS}`,
        TOAST_TYPES.SUCCESS
      )
    } catch (error) {
      let errorMsg = 'Error'

      if (error.hasOwnProperty('message')) {
        errorMsg = error.message
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        errorMsg = error.response.data.error
      }

      dispatchAction(ACTION_TYPES.URL_ERROR, errorMsg)

      dispatchToastAction(
        `${TOAST_MESSAGES.SHORT_URL_DISPLAY.SHORTEN_ERROR}: ${errorMsg}`,
        TOAST_TYPES.ERROR
      )
    }
  }

  // Get all Shortened Urls so far
  const getUrls = useCallback(async () => {
    try {
      const response = await axios.get(API_BASE_URI)

      dispatchAction(ACTION_TYPES.GET_URLS, response.data.data)
    } catch (error) {
      dispatchAction(ACTION_TYPES.URL_ERROR, error.response.data.error)

      dispatchToastAction(
        `${TOAST_MESSAGES.URL_LIST_TABLE.GET_ALL_URLS_ERROR}`,
        TOAST_TYPES.ERROR
      )
    }
  }, [dispatchToastAction])

  const deleteUrl = async deletedId => {
    try {
      const response = await axios.delete(`${API_BASE_URI}/${deletedId}`)

      dispatchAction(ACTION_TYPES.DELETE_URL, response.data.data)

      dispatchToastAction(
        TOAST_MESSAGES.URL_LIST_TABLE.DELETE_SUCCESS,
        TOAST_TYPES.SUCCESS
      )
    } catch (error) {
      dispatchAction(ACTION_TYPES.URL_ERROR, error.response.data.error)

      dispatchToastAction(
        TOAST_MESSAGES.URL_LIST_TABLE.DELETE_ERROR,
        TOAST_TYPES.ERROR
      )
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        urls: globalState.urls,
        toastMessage: globalState.toastMessage,
        toastType: globalState.toastType,
        recentShortUrl: globalState.recentShortUrl,
        baseUrl: globalState.baseUrl,

        dispatchToastAction,
        getShortenedUrl,
        deleteUrl,
        getUrls,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
