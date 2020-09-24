import React from 'react'

import { useOState, useActions } from 'overmind/index'

import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'

import Refresh from '@material-ui/icons/Refresh'

import translator from 'utility/translator'

import GameResults from './components/GameResults'

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    right: 25,
    bottom: 25,
  },
}))

const Results = () => {
  const state = useOState()
  const classes = useStyles()
  const actions = useActions()

  return (
    <>
      <Typography variant='h4'>{translator.fromLabel('results_title')}</Typography>
      <div style={{ height: 30 }} />
      <List>
        <Divider />
        {Object.values(state.contenders)
          .sort((a, b) => state.results[a.name] > state.results[b.name] ? -1 : 1)
          .map(contender => {
            return (
              <React.Fragment key={contender.name}>
                <ListItem>
                  <Toolbar disableGutters>
                    <Typography variant='h5'>{contender.name + ' - ' + state.results[contender.name]}</Typography>
                  </Toolbar>
                </ListItem>
                <Divider />
              </React.Fragment>
            )
          })}
      </List>
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
