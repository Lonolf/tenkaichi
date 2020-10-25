const navigationChangeNavigation = ({ state }, values) => {
  try {
    state.navigation = {
      ...state.navigation,
      ...values,
    }
  } catch (error) {
    console.error(error)
  }
}

const navigationGoPreviousGame = ({ state }) => {
  if (state.navigation.gameId > 1) {
    const newGameId = state.navigation.gameId - 1
    const lastMatchKey = Object.keys(state.games[newGameId].matches).length

    state.navigation.gameId = newGameId
    state.navigation.matchId = lastMatchKey
  }
}

const navigationGoNextGame = ({ state }) => {
  const newGameId = state.navigation.gameId + 1
  if (state.games[newGameId] != null) {
    const lastMatchKey = Object.keys(state.games[newGameId].matches).length

    state.navigation.gameId = newGameId
    state.navigation.matchId = lastMatchKey
  }
}

export default {
  navigationChangeNavigation,
  navigationGoPreviousGame,
  navigationGoNextGame,
}
