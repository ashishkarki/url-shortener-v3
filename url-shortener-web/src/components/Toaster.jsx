import React, { useContext, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalContext } from '../context/GlobalContext'
import { TOAST_TYPES } from '../utils/constants'

export const Toaster = () => {
  const { toastMessage, toastType } = useContext(GlobalContext)

  useEffect(() => {
    let localToastMsg = toastMessage // toast message without timestamp

    if (
      localToastMsg &&
      typeof localToastMsg === 'string' &&
      localToastMsg !== ''
    ) {
      const timestampSeparatorIndex = localToastMsg.indexOf('%')
      if (timestampSeparatorIndex > -1) {
        localToastMsg = localToastMsg.substring(0, timestampSeparatorIndex)
      }

      switch (toastType) {
        case TOAST_TYPES.SUCCESS:
          toast.info(localToastMsg)
          break
        case TOAST_TYPES.ERROR:
          toast.error(localToastMsg)
          break
        default:
          toast(localToastMsg)
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
