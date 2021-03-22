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
    color: '#1ed65f',
    fontSize: '1.3rem',
    fontStyle: 'italic',
    display: 'block',
  },
})

function LongUrl() {
  const classes = useStyles()
  const { getShortenedUrl } = useContext(GlobalContext)

  return (
    <>
      <FormLabel
        children='Short Url'
        className={`${false ? classes.labelShow : classes.labelHide}`}
      />
    </>
  )
}

export default LongUrl
