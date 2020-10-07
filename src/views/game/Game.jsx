import React from 'react'
import { useOState } from 'overmind/index'

import Typography from '@material-ui/core/Typography'

import ScoreCard from './components/ScoreCard.jsx'
import TopBar from './components/TopBar.jsx'

import translator from 'utility/translator'

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
    </>
  )
}

export default Game
