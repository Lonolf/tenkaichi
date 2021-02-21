import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { dispatch, actions, call, functions } from 'domains'

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
    position: 'absolute',
    top: 0,
    backgroundColor: theme.palette.background.paper,
    padding: '20px 0px',
  },
  fab: {
    position: 'fixed',
    right: 25,
    bottom: 25,
  },
}))

const TopBar = () => {
  const classes = useStyles()
  const state = useSelector(state => state)

  const gameId = Number(state.navigation.gameId)
  const matchId = Number(state.navigation.matchId)

  if (state.games[gameId] == null || state.games[gameId].matches[matchId] == null)
    return null

  const game = state.games[gameId]

  return (
    <Toolbar className={classes.topBarContainer} disableGutters>
      <Button
        disabled={gameId <= 1}
        onClick={() => call(functions.navigationGoPreviousGame)}
      >
        <FastRewind />
      </Button>
      <Button
        disabled={matchId <= 1}
        onClick={() => dispatch(actions.navigationEditNavigation, ({ matchId: matchId - 1 }))}
      >
        <ArrowLeft />
      </Button>
      <Typography variant='body1'>
        {translator.fromLabel('game_title')}
        {' ' + gameId + ' ' + matchId + '/' + state.rules.matches }
      </Typography>
      <Button
        disabled={game.matches[matchId + 1] == null}
        onClick={() => dispatch(actions.navigationEditNavigation, ({ matchId: matchId + 1 }))}
      >
        <ArrowRight />
      </Button>
      <Button
        disabled={gameId >= Object.keys(state.games).length}
        onClick={() => call(functions.navigationGoNextGame)}
      >
        <FastForward />
      </Button>
    </Toolbar>
  )
}

export default TopBar
