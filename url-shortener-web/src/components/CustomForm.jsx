import React, { useContext, useState } from 'react'
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ShortUrlDisplay from './ShortUrlDisplay'
import { GlobalContext } from '../context/GlobalContext'

const useStyles = makeStyles({
  card: {
    border: 0,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#c71b68',
    textAlign: 'center',
    margin: '1rem',

    overflowWrap: 'break-word',
    wordBreak: 'break-all',
  },
})

function CustomForm() {
  const classes = useStyles()
  const [longUrl, setLongUrl] = useState('')
  const { getShortenedUrl } = useContext(GlobalContext)

  const shortenUrl = e => {
    e.preventDefault()

    getShortenedUrl(longUrl)
  }

  const clearLongUrlInput = e => {
    e.preventDefault()

    setLongUrl('')
  }

  return (
    <form onSubmit={e => shortenUrl(e)}>
      <Card className={classes.card}>
        <CardContent>
          <FormControl>
            <InputLabel htmlFor='my-input'>Enter Long Url</InputLabel>
            <Input
              id='my-input'
              aria-describedby='my-helper-text'
              value={longUrl}
              onChange={e => setLongUrl(e.target.value)}
            />
            <FormHelperText id='my-helper-text' style={{ margin: '1rem auto' }}>
              Press Enter or Click Button below
            </FormHelperText>

            <Button
              variant='contained'
              color='primary'
              onClick={e => shortenUrl(e)}
              style={{ margin: '0.2rem auto' }}
            >
              Shorten Url
            </Button>

            <Button
              variant='outlined'
              color='secondary'
              onClick={e => clearLongUrlInput(e)}
              style={{ margin: '0.2rem auto' }}
            >
              Clear Input
            </Button>

            <ShortUrlDisplay />
          </FormControl>
        </CardContent>
      </Card>
    </form>
  )
}

export default CustomForm
