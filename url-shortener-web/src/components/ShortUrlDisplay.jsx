import React from 'react'
import { FormLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const useStyles = makeStyles({
  labelHide: {
    display: 'none',
  },
  labelShow: {
    margin: '1rem',
    padding: '0.5rem',
    // color: '#1ed65f',
    fontSize: '1.3rem',
    // fontStyle: 'italic',
    display: 'block',
  },
})

function ShortUrlDisplay() {
  const classes = useStyles()
  const { recentShortUrl } = useContext(GlobalContext)

  return (
    <>
      <FormLabel
        className={`${recentShortUrl ? classes.labelShow : classes.labelHide}`}
      >
        <div>
          Short Url:
          <span
            style={{
              border: '0.5px solid rgba(0, 0, 0, 0.87)',
              borderRadius: '10px',
              padding: '5px',
              margin: 'auto 5px',
            }}
          >
            {recentShortUrl}
          </span>
        </div>
      </FormLabel>
    </>
  )
}

export default ShortUrlDisplay
