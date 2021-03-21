import React from 'react'

import { Container, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import Content from './Content'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #b2eee9 30%, #ee9c64 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'whitesmoke',
    padding: '0 30px',
    textAlign: 'center',
    height: '95vh'
  },
})

function LongUrl() {
  const classes = useStyles()

  return (
    <>
      {/* <Container maxWidth='lg'> */}
        <Card className={classes.root}>
          <Header />

          <Content />
        </Card>
      {/* </Container> */}
    </>
  )
}

export default LongUrl
