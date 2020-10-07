import { getContendersPairs, checkOrder, shuffleArray } from 'overmind/functions/gamesUtilities'
import { formatMatch } from 'overmind/functions/format'

const gamesCreateGames = ({ state, actions }) => {
  try {
    //   const contenders = ['a', 'b', 'c', 'd', 'e', 'f']
    const contenders = Object.keys(state.contenders)

    const contendersPairs = checkOrder(shuffleArray(getContendersPairs(contenders)))

    state.games = contendersPairs.reduce((list, pair, index) => ({
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
  } catch (error) {
    console.error(error)
  }
}

const gamesEditGame = ({ state }, { gameId, matchId, ...values }) => {
  try {
    if (state.games[gameId] == null)
      throw new Error('GameId "' + gameId + '" not valid')

    state.games[gameId] = { ...state.games[gameId], ...values }
  } catch (error) {
    console.error(error)
  }
}

const gamesFinishGame = ({ state, actions }, { gameId }) => {
  try {
    state.games[gameId].finished = true

    if (Object.values(state.games).filter(game => !game.finished).length === 0)
      actions.tournamentFinishTournament()
    else if (state.games[gameId + 1] != null)
      actions.navigationChangeNavigation({ gameId: gameId + 1, matchId: 1 })
  } catch (error) {
    console.error(error)
  }
}

const gamesAddAdmonition = ({ state }, { gameId, matchId, name, adversaryScoreName }) => {
  try {
    state.contenders[name].admonitions++

    if (state.contenders[name].admonitions > state.rules.maxAdmonitions)
      state.games[gameId].matches[matchId][adversaryScoreName]++
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
