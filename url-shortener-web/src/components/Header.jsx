import React from 'react'
import { CardHeader, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  header: {
    font: '3rem bold',
    textDecoration: 'underline',
  },
  link: {
    margin: 'auto 5px',
  },
})

function Header() {
  const classes = useStyles()

  return (
    <>
      <CardHeader
        title={
          <Typography className={classes.header}>
            Common person's URL Shortener
          </Typography>
        }
        subheader={
          <Typography>
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

export default Header
