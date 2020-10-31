import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from 'redux/actions'
import functions from 'redux/functions'
import Typography from '@material-ui/core/Typography'

import ScoreLine from './components/ScoreLine.jsx'
import TopBar from './components/TopBar.jsx'
import ActionModal from './components/ActionModal.jsx'

import translator from 'utility/translator'

const Game = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [values, setValues] = useState({ scoreConA: 0, scoreConB: 0 })
  const gameId = Number(state.navigation.gameId)
  const matchId = Number(state.navigation.matchId)

  useEffect(() => setValues({ scoreConA: 0, scoreConB: 0 }), [matchId])

  if (state.games[gameId] == null || state.games[gameId].matches[matchId] == null)
    return 'No Game or Match found'

  const game = state.games[gameId]
  const match = game.matches[matchId]
  const buttonsDisabled = match.status !== 'ongoing'
  const actionsEnabled = state.settings.actionsButton

  const addScore = ({ scoreName }) => {
    if (state.settings.actionsButton)
      setValues({ ...values, [scoreName]: values[scoreName] + 1 })
    else
      dispatch(actions.matchesEditMatch({ gameId, matchId, [scoreName]: match[scoreName] + 1 }))
  }

  const removeScore = ({ scoreName }) => {
    if (state.settings.actionsButton)
      setValues({ ...values, [scoreName]: values[scoreName] - 1 })
    else
      dispatch(actions.matchesEditMatch({ gameId, matchId, [scoreName]: match[scoreName] - 1 }))
  }

  const saveAction = () => {
    dispatch(actions.matchesCreateAction({ gameId, matchId, scoreConA: values.scoreConA, scoreConB: values.scoreConB }))
    setValues({ scoreConA: 0, scoreConB: 0 })
  }

  const addAdmonition = ({ name, scoreName }) => {
    functions.gamesAddAdmonition({ gameId, matchId, name, adversaryScoreName: scoreName === 'scoreConA' ? 'scoreConB' : 'scoreConA' })
  }

  return (
    <>
      <TopBar />
      <div style={{ flex: '3 0 75px' }} />
      <ScoreLine props={{ contender: state.contenders[game.conA], score: match.scoreConA, actionScore: values.scoreConA, scoreName: 'scoreConA', addAdmonition, addScore, removeScore, buttonsDisabled, actionsEnabled }} />
      <div style={{ height: 25 }} />
      <ActionModal props={{ saveAction, values, actionsEnabled }} />
      <div style={{ height: 25 }} />
      <ScoreLine props={{ contender: state.contenders[game.conB], score: match.scoreConB, actionScore: values.scoreConB, scoreName: 'scoreConB', addAdmonition, addScore, removeScore, buttonsDisabled, actionsEnabled }} />
      <div style={{ height: 30 }} />
      {game.finished
        ? <Typography style={{ color: 'red' }}>{translator.fromLabel('game_gameFinished_warning')}</Typography>
        : null}
      <div style={{ flex: '1 0 30px' }} />
      {state.games[+gameId + 1] != null
        ? <Typography>{'Next game: ' + state.games[+gameId + 1].conA + ' vs ' + state.games[+gameId + 1].conB}</Typography>
        : <Typography style={{ fontWeight: 'bold' }}>{translator.fromLabel('game_lastGame_warning')}</Typography>}
      <div style={{ flex: '0 0 30px' }} />
    </>
  )
}

export default Game
