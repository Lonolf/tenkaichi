import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import selectors from 'domains/results/selectors'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import ContenderDetails from 'components/contenderDetails/ContenderDetails.jsx'

import translator from 'utility/translator'

const useStyles = makeStyles(theme => ({
}))

const ContendersList = () => {
  const [order, setOrder] = useState('points')
  const [showDetails, setShowDetails] = useState(null)
  const results = useSelector(selectors.selectResults)
  const classes = useStyles()

  const orderedResults = Object.values(results)
    .sort((a, b) => {
      switch (order) {
        case 'points':
          return a.points > b.points
            ? -1
            : a.points < b.points
              ? 1
              : a.disparity > b.disparity
                ? -1
                : 1
        case 'invPoints':
          return a.points > b.points
            ? 1
            : a.points < b.points
              ? -1
              : a.disparity > b.disparity
                ? 1
                : -1
        case 'disparity':
          return a.disparity > b.disparity
            ? -1
            : 1
        case 'invDisparity':
          return a.disparity > b.disparity
            ? 1
            : -1
        case 'hitsScored':
          return a.hitsScored > b.hitsScored
            ? -1
            : a.hitsScored < b.hitsScored
              ? 1
              : a.disparity > b.disparity
                ? -1
                : 1
        case 'invHitsScored':
          return a.hitsScored > b.hitsScored
            ? 1
            : a.hitsScored < b.hitsScored
              ? -1
              : a.disparity > b.disparity
                ? 1
                : -1
        case 'hitsSuffered':
          return a.hitsSuffered > b.hitsSuffered
            ? -1
            : a.hitsSuffered < b.hitsSuffered
              ? 1
              : a.disparity > b.disparity
                ? -1
                : 1
        case 'invHitsSuffered':
          return a.hitsSuffered > b.hitsSuffered
            ? +1
            : a.hitsSuffered < b.hitsSuffered
              ? -1
              : a.disparity > b.disparity
                ? 1
                : -1
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
              <TableCell onClick={() => setOrder(order !== 'name' ? 'name' : 'invName')}>
                {translator.fromLabel('contendersList_name_label')}
              </TableCell>
              <TableCell onClick={() => setOrder(order !== 'points' ? 'points' : 'invPoints')} align='right'>
                {translator.fromLabel('contendersList_points_label')}
              </TableCell>
              <TableCell onClick={() => setOrder(order !== 'disparity' ? 'disparity' : 'invDisparity')} align='right'>
                {translator.fromLabel('contendersList_disparity_label')}
              </TableCell>
              <TableCell onClick={() => setOrder(order !== 'hitsScored' ? 'hitsScored' : 'invHitsScored')} align='right'>
                {translator.fromLabel('contendersList_hitsScored_label')}
              </TableCell>
              <TableCell onClick={() => setOrder(order !== 'hitsSuffered' ? 'hitsSuffered' : 'invHitsSuffered')} align='right'>
                {translator.fromLabel('contendersList_hitsSuffered_label')}
              </TableCell>
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
