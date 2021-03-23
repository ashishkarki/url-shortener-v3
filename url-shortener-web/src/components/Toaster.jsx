import React, { useContext, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalContext } from '../context/GlobalContext'
import { TOAST_TYPES } from '../utils/constants'

export const Toaster = () => {
  const { toastMessage, toastType } = useContext(GlobalContext)

  useEffect(() => {
    let toastMsgWoTs = toastMessage // toast message without timestamp

    if (toastMsgWoTs && toastMsgWoTs !== '') {
      const timestampSeparatorIndex = toastMsgWoTs.indexOf('%')
      if (timestampSeparatorIndex > -1) {
        toastMsgWoTs = toastMsgWoTs.substring(0, timestampSeparatorIndex)
      }

      switch (toastType) {
        case TOAST_TYPES.SUCCESS:
          toast.info(toastMsgWoTs)
          break
        case TOAST_TYPES.ERROR:
          toast.error(toastMsgWoTs)
          break
        default:
          toast(toastMsgWoTs)
          break
      }
    }
  }, [toastType, toastMessage])

  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        limit={3}
      />
    </div>
  )
}
