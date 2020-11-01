import { getContendersPairs, checkOrder, shuffleArray } from 'redux/pureFunctions/gamesUtilities'
import { formatMatch } from 'redux/pureFunctions/format'
import functions from 'redux/functions'
import store from 'redux/store'
import actions from 'redux/actions'
const { getState, dispatch } = store

const gamesCreateGames = () => {
  try {
    const state = getState()
    //   const contenders = ['a', 'b', 'c', 'd', 'e', 'f']
    const contenders = Object.keys(state.contenders)

    const contendersPairs = checkOrder(shuffleArray(getContendersPairs(contenders)))

    const games = contendersPairs.reduce((list, pair, index) => ({
      ...list,
      [index + 1]: {
        gameId: index + 1,
        conA: pair[0],
        conB: pair[1],
        matches: {
          1: formatMatch(1),
        },
      },
    }), {})

    dispatch(actions.reducerGamesCreateGames(games))
  } catch (error) {
    console.error(error)
  }
}

const gamesEditGame = ({ gameId, matchId, ...values }) => {
  try {
    const state = getState()
    if (state.games[gameId] == null)
      throw new Error('GameId "' + gameId + '" not valid')

    dispatch(actions.reducerGamesEditGame({ gameId, values }))
  } catch (error) {
    console.error(error)
  }
}

const gamesFinishGame = ({ gameId }) => {
  try {
    dispatch(actions.reducerGamesEditGame({ gameId, values: { finished: true } }))

    const state = getState()

    if (Object.values(state.games).filter(game => !game.finished).length === 0)
      functions.tournamentFinishTournament()
    else if (state.games[gameId + 1] != null)
      dispatch(actions.navigationEditNavigation({ gameId: gameId + 1, matchId: 1 }))
  } catch (error) {
    console.error(error)
  }
}

const gamesAddAdmonition = ({ gameId, matchId, name, adversaryScoreName }) => {
  try {
    let state = getState()

    dispatch(actions.contendersAddAdmonition({ name }))
    
    state = getState()
    if (state.contenders[name].admonitions > state.rules.maxAdmonitions) {
      const newScore = state.games[gameId].matches[matchId][adversaryScoreName] + 1
      dispatch(actions.matchesEditMatch({ gameId, matchId, values: { adversaryScoreName: newScore } }))
    }
  } catch (error) {
    console.error(error)
  }
}

export default {
  gamesCreateGames,
  gamesEditGame,
  gamesFinishGame,
  gamesAddAdmonition,
}
