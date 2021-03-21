import React from 'react'
import {
  CardContent,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  FormLabel,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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

function Content() {
  const classes = useStyles()

  return (
    <>
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
    </>
  )
}

export default Content
