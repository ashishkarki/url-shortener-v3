import React from 'react'
import { FormLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import FileCopyIcon from '@material-ui/icons/FileCopy'

import { TOAST_TYPES, TOAST_MESSAGES, API_BASE_URI } from '../utils/constants'

const useStyles = makeStyles({
  labelHide: {
    display: 'none',
  },
  labelShow: {
    margin: '1rem',
    padding: '0.5rem',
    fontSize: '1.3rem',
    display: 'block',
  },
  uiIconsAlign: {
    verticalAlign: 'middle',
    margin: '0.5rem auto',
  },
})

function ShortUrlDisplay() {
  const classes = useStyles()
  const { baseUrl, recentShortUrl, dispatchToastAction } = useContext(
    GlobalContext
  )

  async function copyToClipboard() {
    try {
      const indexOfLastSlash = recentShortUrl.lastIndexOf('/')
      const copiedText =
        baseUrl +
        API_BASE_URI +
        recentShortUrl.substring(indexOfLastSlash) +
        '/lengthen'

      await navigator.clipboard.writeText(copiedText)

      dispatchToastAction(
        TOAST_MESSAGES.SHORT_URL_DISPLAY.COPY_SUCCESS,
        TOAST_TYPES.SUCCESS
      )
    } catch (_) {
      dispatchToastAction(
        TOAST_MESSAGES.SHORT_URL_DISPLAY.COPY_ERROR,
        TOAST_TYPES.ERROR
      )
    }
  }

  return (
    <>
      <FormLabel
        className={`${recentShortUrl ? classes.labelShow : classes.labelHide}`}
      >
        <DoubleArrowIcon className={classes.uiIconsAlign} />
        <span
          style={{
            border: '0.1px solid rgba(0, 0, 0, 0.87)',
            borderRadius: '7px',
            backgroundColor: '#3f51b5',
            fontStyle: 'italic',
            padding: '5px',
            margin: 'auto 5px',
            color: 'black',
          }}
        >
          {recentShortUrl}
        </span>
        <FileCopyIcon
          className={classes.uiIconsAlign}
          onClick={() => copyToClipboard(recentShortUrl)}
        />
      </FormLabel>
    </>
  )
}

export default ShortUrlDisplay
