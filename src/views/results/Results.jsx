import React from 'react'

import { useActions } from 'overmind/index'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'

import Refresh from '@material-ui/icons/Refresh'

import translator from 'utility/translator'

import GameResults from './components/GameResults.jsx'
import ContendersList from './components/ContendersList.jsx'

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    right: 25,
    bottom: 25,
  },
}))

const Results = () => {
  const classes = useStyles()
  const actions = useActions()

  return (
    <>
      <Typography variant='h4'>{translator.fromLabel('results_title')}</Typography>
      <div style={{ height: 30 }} />
      <ContendersList />
      <div style={{ height: 30 }} />
      <GameResults />
      <div style={{ height: 50 }} />
      <Fab
        className={classes.fab}
        color='primary'
        onClick={() => actions.reset()}
      >
        <Refresh />
      </Fab>
    </>
  )
}

export default Results
