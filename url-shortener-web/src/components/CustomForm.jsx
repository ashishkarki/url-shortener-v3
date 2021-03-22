import React from 'react'
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
import LongUrl from './LongUrl'

const useStyles = makeStyles({
  card: {
    border: 0,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#c71b68',
    textAlign: 'center',
    margin: '1rem',
  },
})

function CustomForm() {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <FormControl>
          <InputLabel htmlFor='my-input'>Enter Long Url</InputLabel>
          <Input id='my-input' aria-describedby='my-helper-text' />
          <FormHelperText id='my-helper-text' style={{ margin: '1rem auto' }}>
            Press Enter or Click Button below
          </FormHelperText>

          <Button
            variant='contained'
            color='secondary'
            onClick={e => console.log(e)}
          >
            Shorten Url
          </Button>

          <LongUrl />
        </FormControl>
      </CardContent>
    </Card>
  )
}

export default CustomForm