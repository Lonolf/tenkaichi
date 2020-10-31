import React from 'react'
import { useSelector } from 'react-redux'

import Button from '@material-ui/core/Button'

import translator from 'utility/translator'

const ActionModal = ({ props: { values: { scoreConA, scoreConB } = {}, saveAction = () => {}, actionsEnabled = false } }) => {
  const state = useSelector(state => state)
  const gameId = Number(state.navigation.gameId)
  const matchId = Number(state.navigation.matchId)

  const game = state.games[gameId]
  const match = game.matches[matchId]

  const buttonEnabled = scoreConA > 0 || scoreConB > 0

  if (!actionsEnabled)
    return null
  else
    return (
      <Button
        id='openActionModal'
        variant='contained'
        color='primary'
        onClick={saveAction}
        disabled={match.status !== 'ongoing' || !buttonEnabled}
      >
        {translator.fromLabel('game_saveAction_button')}
      </Button>
    )
}

export default ActionModal
