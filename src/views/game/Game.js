import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useState, useActions } from 'overmind/index'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'

import Check from '@material-ui/icons/Check'

import { useUpdateParams } from 'hooks'
import { useParams } from 'react-router-dom'

import ScoreCard from './components/ScoreCard'

import translator from 'utility/translator'

const useStyles = makeStyles(theme => ({
  topBarContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  fab: {
    position: 'fixed',
    right: 25,
    bottom: 25,
  },
}))

const Game = () => {
  const classes = useStyles()
  const state = useState()
  const { gameId } = useParams()
  const actions = useActions()

  if (state.games[gameId] == null)
    return null

  const game = state.games[gameId]

  return (
    <>
      <TopBar props={{ games: state.games, gameId }} />
      <ScoreCard props={{ state, gameId }} />
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
        onClick={() => actions.gamesFinishGame({ gameId })}
        disabled={game.finished || (game.scoreConA === 0 && game.scoreConB === 0)}
      >
        <Check />
      </Fab>
    </>
  )
}

const TopBar = ({ props: { games, gameId } = {} } = {}) => {
  const updateParams = useUpdateParams()
  const classes = useStyles()

  return (
    <Toolbar className={classes.topBarContainer} disableGutters>
      <Button
        variant='outlined'
        disabled={Number(gameId) < 2}
        onClick={() => updateParams({ pathname: `/game/${Number(gameId) - 1}` })}
      >
        BACK
      </Button>
      <Typography variant='h4'>
        {translator.fromLabel('game_title')}
        {' ' + gameId}
      </Typography>
      <Button
        variant='outlined'
        disabled={Number(gameId) >= Object.keys(games).length}
        onClick={() => updateParams({ pathname: `/game/${Number(gameId) + 1}` })}
      >
        FORWARD
      </Button>
    </Toolbar>
  )
}

export default Game
