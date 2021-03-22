import './App.css'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomHeader from './components/CustomHeader'
import CustomForm from './components/CustomForm'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})

function App() {
  const classes = useStyles()

  return (
    // <CustomContainer />
    <>
      <CustomHeader />

      <Container className={classes.container}>
        <CustomForm />

        <CustomForm />
      </Container>
    </>
  )
}

export default App
