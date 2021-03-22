import React from 'react'
import { CardHeader, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
  },
  title: {
    font: '3rem bold',
    textDecoration: 'underline',
  },
  subheader: {
    margin: '1rem auto',
  },
  link: {
    margin: 'auto 5px',
  },
})

function CustomHeader() {
  const classes = useStyles()

  return (
    <>
      <CardHeader
        className={classes.header}
        title={
          <Typography className={classes.title}>
            <Link href='#' className={classes.link}>
              ShineyUrl: Url Shortener
            </Link>
          </Typography>
        }
        subheader={
          <Typography className={classes.subheader}>
            Built by
            <Link
              href='https://www.linkedin.com/in/ashish-karki'
              target='_blank'
              rel='noopener'
              className={classes.link}
            >
              ASHISH KARKI
            </Link>
          </Typography>
        }
      />
    </>
  )
}

export default CustomHeader
