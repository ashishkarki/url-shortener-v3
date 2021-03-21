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
    color: 'white',
    padding: '0 30px',
    textAlign: 'center',
  },
})

function LongUrl() {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth='md'>
        <Card className={classes.root}>
          <CardHeader
            title="Common person's URL Shortener"
            subheader='September 14, 2016'
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

              <div style={{ margin: '1rem', border: '2px solid black' }}>
                <FormLabel children='Short Url' />
              </div>
            </FormControl>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default LongUrl
