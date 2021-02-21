import { getContendersPairs, checkOrder, shuffleArray } from 'domains/games/pureFunctions'
import { formatMatch } from 'domains/matches/format'

const gamesCreateGames = ({ getState, dispatch, actions }) => {
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

  dispatch(actions.reducerGamesCreateGames, games)
}

const gamesEditGame = ({ getState, dispatch, actions, gameId, matchId, ...values }) => {
  const state = getState()
  if (state.games[gameId] == null)
    throw new Error('GameId "' + gameId + '" not valid')

  dispatch(actions.reducerGamesEditGame, { gameId, values })
}

const gamesFinishGame = ({ getState, dispatch, actions, call, functions, gameId }) => {
  dispatch(actions.reducerGamesEditGame, { gameId, values: { finished: true } })

  const state = getState()

  if (Object.values(state.games).filter(game => !game.finished).length === 0)
    call(functions.tournamentFinishTournament)
  else if (state.games[gameId + 1] != null)
    dispatch(actions.navigationEditNavigation, { gameId: gameId + 1, matchId: 1 })
}

const gamesAddAdmonition = ({ getState, dispatch, actions, call, functions, gameId, matchId, name, adversaryScoreName }) => {
  let state = getState()

  dispatch(actions.contendersAddAdmonition, { name })

  state = getState()
  if (state.contenders[name].admonitions > state.rules.maxAdmonitions) {
    const newScore = state.games[gameId].matches[matchId][adversaryScoreName] + 1
    dispatch(actions.matchesEditMatch, { gameId, matchId, values: { adversaryScoreName: newScore } })
  }
}

export default {
  gamesCreateGames,
  gamesEditGame,
  gamesFinishGame,
  gamesAddAdmonition,
}
