import { history } from 'index'

const gamesEditGame = ({ state }, { gameId, ...values }) => {
  try {
    if (state.games[gameId] == null)
      throw new Error('GameId "' + gameId + '" not valid')

    state.games[gameId] = { ...state.games[gameId], ...values }
  } catch (error) {
    console.error(error)
  }
}

const gamesFinishGame = ({ state }, { gameId }) => {
  try {
    state.games[gameId].finished = true

    if (Object.values(state.games).filter(game => !game.finished).length === 0)
      history.push('/results')
  } catch (error) {
    console.error(error)
  }
}

export default {
  gamesEditGame,
  gamesFinishGame,
}
