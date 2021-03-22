import { useReducer } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'

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
export const GlobalProvider = ({children}) => {
    const [globalState, dispatch] = useReducer(AppReducer, initialState)

    // Dispatch Actions below:

    const getShortenedUrl = async (longUrl) => {
        try {
            const response = await axios.post(
                ``
            )
        } catch (error) {

        }
    }
}
