import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

// // reference: https://material-ui.com/components/progress/#progress

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  progress: {
    color: '#FFFAF0', //floralwhite
  },
}))

export default function CustomProgressDisplay() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} />
    </div>
  )
}
