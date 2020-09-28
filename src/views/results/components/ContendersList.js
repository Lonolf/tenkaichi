import React, { useState } from 'react'

import { useOState } from 'overmind/index'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import ContenderDetails from 'components/contenderDetails/ContenderDetails'

const useStyles = makeStyles(theme => ({
}))

const ContendersList = () => {
  const [order, setOrder] = useState('points')
  const [showDetails, setShowDetails] = useState(null)
  const state = useOState()
  const classes = useStyles()

  const orderedResults = Object.values(state.results)
    .sort((a, b) => {
      switch (order) {
        case 'points':
          return a.points > b.points ? -1
            : a.points < b.points ? 1
              : a.disparity > b.disparity
                ? -1 : 1
        case 'invPoints':
          return a.points > b.points ? 1
            : a.points < b.points ? -1
              : a.disparity > b.disparity
                ? 1 : -1
        case 'disparity':
          return a.disparity > b.disparity
            ? -1 : 1
        case 'invDisparity':
          return a.disparity > b.disparity
            ? 1 : -1
        case 'hitsScored':
          return a.hitsScored > b.hitsScored ? -1
            : a.hitsScored < b.hitsScored ? 1
              : a.disparity > b.disparity
                ? -1 : 1
        case 'invHitsScored':
          return a.hitsScored > b.hitsScored ? 1
            : a.hitsScored < b.hitsScored ? -1
              : a.disparity > b.disparity
                ? 1 : -1
        case 'hitsSuffered':
          return a.hitsSuffered > b.hitsSuffered ? -1
            : a.hitsSuffered < b.hitsSuffered ? 1
              : a.disparity > b.disparity
                ? -1 : 1
        case 'invHitsSuffered':
          return a.hitsSuffered > b.hitsSuffered ? +1
            : a.hitsSuffered < b.hitsSuffered ? -1
              : a.disparity > b.disparity
                ? 1 : -1
        case 'name':
          return a.name > b.name ? 1 : -1
        case 'invName':
          return a.name > b.name ? -1 : 1
        default:
          return a.name > b.name ? 1 : -1
      }
    })

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => setOrder(order !== 'name' ? 'name' : 'invName')}>Name</TableCell>
              <TableCell onClick={() => setOrder(order !== 'points' ? 'points' : 'invPoints')} align='right'>Points</TableCell>
              <TableCell onClick={() => setOrder(order !== 'disparity' ? 'disparity' : 'invDisparity')} align='right'>Disparity</TableCell>
              <TableCell onClick={() => setOrder(order !== 'hitsScored' ? 'hitsScored' : 'invHitsScored')} align='right'>Hits Scored</TableCell>
              <TableCell onClick={() => setOrder(order !== 'hitsSuffered' ? 'hitsSuffered' : 'invHitsSuffered')} align='right'>Hits Suffered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderedResults.map(result => (
              <TableRow key={result.name} onClick={() => setShowDetails(result.name)}>
                <TableCell component='th' scope='row'>
                  {result.name}
                </TableCell>
                <TableCell align='right'>{result.points}</TableCell>
                <TableCell align='right'>{result.disparity}</TableCell>
                <TableCell align='right'>{result.hitsScored}</TableCell>
                <TableCell align='right'>{result.hitsSuffered}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ContenderDetails props={{ name: showDetails, onClose: () => setShowDetails(null) }} />
    </>
  )
}

export default ContendersList
