import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useOState, useActions } from 'overmind/index'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import FastRewind from '@material-ui/icons/FastRewind'
import ArrowLeft from '@material-ui/icons/ArrowLeft'
import ArrowRight from '@material-ui/icons/ArrowRight'
import FastForward from '@material-ui/icons/FastForward'

import translator from 'utility/translator'

const useStyles = makeStyles(theme => ({
  topBarContainer: {
    width: '100%',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  fab: {
    position: 'fixed',
    right: 25,
    bottom: 25,
  },
}))

const TopBar = () => {
  const classes = useStyles()
  const actions = useActions()
  const state = useOState()

  const gameId = Number(state.navigation.gameId)
  const matchId = Number(state.navigation.matchId)

  if (state.games[gameId] == null || state.games[gameId].matches[matchId] == null)
    return null

  const game = state.games[gameId]

  return (
    <Toolbar className={classes.topBarContainer} disableGutters>
      <Button
        size='small'
        variant='outlined'
        disabled={gameId <= 1}
        onClick={() => actions.navigationChangeNavigation({ gameId: gameId - 1 })}
      >
        <FastRewind />
      </Button>
      <Button
        size='small'
        variant='outlined'
        disabled={matchId <= 1}
        onClick={() => actions.navigationChangeNavigation({ matchId: matchId - 1 })}
      >
        <ArrowLeft />
      </Button>
      <Typography variant='h6'>
        {translator.fromLabel('game_title')}
        {' ' + gameId + ' ' + matchId + '/' + state.rules.matches }
      </Typography>
      <Button
        size='small'
        variant='outlined'
        disabled={game.matches[matchId + 1] == null}
        onClick={() => actions.navigationChangeNavigation({ matchId: matchId + 1 })}
      >
        <ArrowRight />
      </Button>
      <Button
        size='small'
        variant='outlined'
        disabled={gameId >= Object.keys(state.games).length}
        onClick={() => actions.navigationChangeNavigation({ gameId: gameId + 1 })}
      >
        <FastForward />
      </Button>
    </Toolbar>
  )
}

export default TopBar
