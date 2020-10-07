import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useOState, useActions } from 'overmind/index'

import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'

import Check from '@material-ui/icons/Check'
import PlayArrow from '@material-ui/icons/PlayArrow'
import Pause from '@material-ui/icons/Pause'

import ScoreCard from './components/ScoreCard.jsx'
import TopBar from './components/TopBar.jsx'

import translator from 'utility/translator'

const useStyles = makeStyles(theme => ({
  bottomContainer: {
    minHeight: 110,
    position: 'fixed',
    left: 0,
    bottom: 0,
    right: 0,
    padding: 25,
    display: 'flex',
  },
  left: {
    flex: '0 0 50px',
  },
  center: {
    flex: '1 1 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: '0 0 50px',
  },
}))

const Game = () => {
  const state = useOState()
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
      <MatchButtons props={{ match, matchId, gameId }} />
    </>
  )
}

const MatchButtons = ({ props: { match, matchId, gameId } }) => {
  const classes = useStyles()
  const actions = useActions()
  useOState()

  return (
    <div className={classes.bottomContainer}>
      <div className={classes.left}>
        {match.status === 'ongoing'
          ? (
            <Fab
              className={classes.fabLeft}
              color='secondary'
              onClick={() => actions.matchesPauseMatch({ gameId, matchId })}
            >
              <Pause />
            </Fab>
          ) : null}
        {match.status === 'paused'
          ? (
            <Fab
              className={classes.fabLeft}
              color='secondary'
              onClick={() => actions.matchesUnpauseMatch({ gameId, matchId })}
            >
              <PlayArrow />
            </Fab>
          ) : null}
      </div>
      <div className={classes.center}>
        {match.status}
      </div>
      <div className={classes.right}>
        {match.status === 'ready'
          ? (
            <Fab
              className={classes.fabRight}
              color='primary'
              onClick={() => actions.matchesStartMatch({ gameId, matchId })}
            >
              <PlayArrow />
            </Fab>
          ) : null}
        {match.status === 'ongoing' || match.status === 'paused'
          ? (
            <Fab
              className={classes.fabRight}
              color='primary'
              onClick={() => actions.matchesFinishMatch({ gameId, matchId })}
            >
              <Check />
            </Fab>
          ) : null}
      </div>
    </div>
  )
}

export default Game
