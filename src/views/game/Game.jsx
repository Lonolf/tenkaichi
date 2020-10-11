import React from 'react'
import { useOState } from 'overmind/index'

import Typography from '@material-ui/core/Typography'

import ScoreLine from './components/ScoreLine.jsx'
import TopBar from './components/TopBar.jsx'
import ActionModal from './components/ActionModal.jsx'

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
      <div style={{ flex: '1' }} />
      <ScoreLine props={{ gameId, matchId, game, match, scoreName: 'scoreConA', adversaryScoreName: 'scoreConB', contender: state.contenders[game.conA] }} />
      <div style={{ height: 25 }} />
      <ActionModal />
      <div style={{ height: 25 }} />
      <ScoreLine props={{ gameId, matchId, game, match, scoreName: 'scoreConB', adversaryScoreName: 'scoreConA', contender: state.contenders[game.conB] }} />
      <div style={{ height: 30 }} />
      {state.games[+gameId + 1] != null
        ? <Typography>{'Next game: ' + state.games[+gameId + 1].conA + ' vs ' + state.games[+gameId + 1].conB}</Typography>
        : <Typography style={{ fontWeight: 'bold' }}>{translator.fromLabel('game_lastGame_warning')}</Typography>}
      {game.finished
        ? <Typography style={{ color: 'red' }}>{translator.fromLabel('game_gameFinished_warning')}</Typography>
        : null}
      <div style={{ flex: '1' }} />
    </>
  )
}

export default Game
