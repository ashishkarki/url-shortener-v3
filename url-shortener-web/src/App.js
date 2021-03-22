import './App.css'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomHeader from './components/CustomHeader'
import CustomForm from './components/CustomForm'
import UrlListTable from './components/UrlListTable'
import { GlobalProvider } from './context/GlobalContext'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})

function App() {
  const classes = useStyles()

  return (
    <GlobalProvider>
      <CustomHeader />

      <Container className={classes.container}>
        <CustomForm />

        <UrlListTable />
      </Container>
    </GlobalProvider>
  )
}

export default App
