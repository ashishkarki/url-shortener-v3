import './App.css'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomHeader from './components/CustomHeader'
import CustomForm from './components/CustomForm'
import UrlListTable from './components/UrlListTable'
import StickyHeadTable from './components/StickyHeadTable'

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
    <>
      <CustomHeader />

      <Container className={classes.container}>
        <CustomForm />

        <StickyHeadTable />
      </Container>
    </>
  )
}

export default App
