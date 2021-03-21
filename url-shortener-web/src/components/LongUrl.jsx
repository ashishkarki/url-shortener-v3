import React from 'react'

import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  FormLabel,
  CardHeader,
  Typography,
  Link,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #b2eee9 30%, #ee9c64 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'whitesmoke',
    padding: '0 30px',
    textAlign: 'center',
    // height: '90vh',
  },
  header: {
    font: '3rem bold',
    textDecoration: 'underline',
  },
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
  link: {
    margin: 'auto 5px',
  },
})

function LongUrl() {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth='md'>
        <Card className={classes.root}>
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

          <CardContent>
            <FormControl>
              <InputLabel htmlFor='my-input'>Enter Long Url</InputLabel>
              <Input id='my-input' aria-describedby='my-helper-text' />
              <FormHelperText id='my-helper-text'>
                Press Enter or Click Button below
              </FormHelperText>

              <Button
                variant='contained'
                color='secondary'
                onClick={e => console.log(e)}
              >
                Shorten Url
              </Button>

              <FormLabel
                children='Short Url'
                className={`${true ? classes.labelShow : classes.labelHide}`}
              />
            </FormControl>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default LongUrl
