import React from 'react'
import { Button, FormLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import FileCopyIcon from '@material-ui/icons/FileCopy'

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
  const { recentShortUrl } = useContext(GlobalContext)

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text)
      alert('Text copied to clipboard')
    } catch (err) {
      alert('Error in copying text: ', err)
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
