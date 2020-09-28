import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useOState, useActions } from 'overmind/index'

import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'

import Check from '@material-ui/icons/Check'

import ScoreCard from './components/ScoreCard'
import TopBar from './components/TopBar'

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

const Game = () => {
  const classes = useStyles()
  const state = useOState()
  const actions = useActions()
  const gameId = Number(state.navigation.gameId)
  const matchId = Number(state.navigation.matchId)

  if (state.games[gameId] == null || state.games[gameId].matches[matchId] == null)
    return null

  const game = state.games[gameId]
  const match = game.matches[matchId]

  return (
    <>
      <TopBar />
      <ScoreCard props={{ contenders: state.contenders, gameId, matchId, game, match }} />
      <div style={{ height: 30 }} />
      {state.games[+gameId + 1] != null
        ? <Typography>{'Next game: ' + state.games[+gameId + 1].conA + ' vs ' + state.games[+gameId + 1].conB}</Typography>
        : <Typography style={{ fontWeight: 'bold' }}>{translator.fromLabel('game_lastGame_warning')}</Typography>}
      {game.finished
        ? <Typography style={{ color: 'red' }}>{translator.fromLabel('game_gameFinished_warning')}</Typography>
        : null}
      <Fab
        className={classes.fab}
        color='primary'
        onClick={() => actions.gamesFinishMatch({ gameId, matchId })}
        disabled={match.finished}
      >
        <Check />
      </Fab>
    </>
  )
}

export default Game
