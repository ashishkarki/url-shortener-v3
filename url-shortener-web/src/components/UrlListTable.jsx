import React, { useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { GlobalContext } from '../context/GlobalContext'
import axios from 'axios'
import { DeleteForever } from '@material-ui/icons/'

//// Reference for source code: https://material-ui.com/components/tables/#table

const columns = [
  { id: 'longUrl', label: 'Long Url' }, //, minWidth: 170
  { id: 'shortUrl', label: 'Shortened Url' }, //, minWidth: 100
  { id: 'createdAt', label: 'Date Created' },
]

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#c71b68',
    textAlign: 'center',
    margin: '1rem',
  },
  head: {
    fontWeight: 'bolder',
    backgroundColor: '#3f51b5',
  },
  container: {
    maxHeight: 440,
  },
})

export default function UrlListTable() {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const { urls, getUrls, deleteUrl } = useContext(GlobalContext)

  const handlePageChange = (_, newPage) => {
    setPage(newPage)
  }

  const handleRowsPerPageChange = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const deleteUrlRow = deletedId => {
    console.log(`Delete row with id ${deletedId}`)
    deleteUrl(deletedId)
  }

  useEffect(() => {
    const source = axios.CancelToken.source()

    getUrls()

    return () => {
      source.cancel()
    }
  }, [getUrls])

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.head}
                >
                  {column.label}
                </TableCell>
              ))}

              <TableCell className={classes.head}>Delete?</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {urls
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row._id}>
                    {columns.map(column => {
                      const curRowcurColValue = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format &&
                          typeof curRowcurColValue === 'number'
                            ? column.format(curRowcurColValue)
                            : curRowcurColValue}
                        </TableCell>
                      )
                    })}

                    <TableCell onClick={() => deleteUrlRow(row._id)}>
                      <DeleteForever />
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={urls.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleRowsPerPageChange}
      />
    </Paper>
  )
}
