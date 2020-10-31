import store from 'redux/store'
import actions from 'redux/actions'
const { getState, dispatch } = store

const navigationGoPreviousGame = () => {
  const state = getState()
  if (state.navigation.gameId > 1) {
    const gameId = state.navigation.gameId - 1
    const matchId = Object.keys(state.games[gameId].matches).length

    dispatch(actions.navigationEditNavigation({ gameId, matchId }))
  }
}

const navigationGoNextGame = () => {
  const state = getState()
  const gameId = state.navigation.gameId + 1
  if (state.games[gameId] != null) {
    const matchId = Object.keys(state.games[gameId].matches).length

    dispatch(actions.navigationEditNavigation({ gameId, matchId }))
  }
}

export default {
  navigationGoPreviousGame,
  navigationGoNextGame,
}
