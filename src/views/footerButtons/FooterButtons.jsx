import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useOState, useActions } from 'overmind/index'

import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'

import Check from '@material-ui/icons/Check'
import PlayArrow from '@material-ui/icons/PlayArrow'
import Pause from '@material-ui/icons/Pause'
import Refresh from '@material-ui/icons/Refresh'

import translator from 'utility/translator'
import MatchTimer from './components/MatchTimer.jsx'

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: '1 1 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  right: {
    flex: '0 0 50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const FooterButtons = () => {
  const classes = useStyles()
  const state = useOState()
  const view = state.navigation.view

  return (
    <div className={classes.bottomContainer}>
      {view === 'contendersSelector' ? <ContendersSelectorButtons />
        : view === 'game' ? <MatchButtons />
          : view === 'results' ? <ResultsButtons />
            : null}
    </div>
  )
}

const ContendersSelectorButtons = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.left} />
      <div className={classes.center}>
        <Typography>{translator.fromLabel('footer_betaWarning')}</Typography>
      </div>
      <div className={classes.right} />
    </>
  )
}

const ResultsButtons = () => {
  const classes = useStyles()
  const actions = useActions()

  return (
    <>
      <div className={classes.left} />
      <div className={classes.center} />
      <div className={classes.right}>
        <Fab
          className={classes.rightFab}
          color='primary'
          onClick={() => actions.reset()}
        >
          <Refresh />
        </Fab>
      </div>
    </>
  )
}

const MatchButtons = () => {
  const actions = useActions()
  const state = useOState()
  const gameId = Number(state.navigation.gameId)
  const matchId = Number(state.navigation.matchId)

  const classes = useStyles()
  const game = state.games[gameId]
  const match = game.matches[matchId]

  return (
    <>
      <div className={classes.left}>
        {match.status === 'ongoing'
          ? (
            <Button
              className={classes.fabLeft}
              color='secondary'
              variant='outlined'
              onClick={() => actions.matchesPauseMatch({ gameId, matchId })}
            >
              <Pause />
            </Button>
          ) : null}
        {match.status === 'paused'
          ? (
            <Button
              className={classes.fabLeft}
              color='secondary'
              variant='contained'
              onClick={() => actions.matchesUnpauseMatch({ gameId, matchId })}
            >
              <PlayArrow />
            </Button>
          ) : null}
      </div>
      <div className={classes.center}>
        <MatchTimer props={{ intervals: match.intervals, status: match.status }} />
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
    </>
  )
}

export default FooterButtons
