import { checkGameWinner } from 'overmind/functions/gamesResults'
import { getContendersPairs, checkOrder } from 'overmind/functions/gamesUtilities'

const formatMatch = matchId => ({ matchId, scoreConA: 0, scoreConB: 0, finished: false })

const gamesCreateGames = ({ state, actions }, { filteredContenders }) => {
  const contenders = filteredContenders.map(contender => contender.name)

  //   const contenders = ['a', 'b', 'c', 'd', 'e', 'f']
  const contendersPairs = checkOrder((getContendersPairs(contenders)))

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
  actions.navigationChangeNavigation({
    gameId: 1,
    matchId: 1,
    view: 'game',
  })
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

const gamesEditMatch = ({ state }, { gameId, matchId, ...values }) => {
  state.games[gameId].matches[matchId] = { ...state.games[gameId].matches[matchId], ...values }
}

const gamesFinishMatch = ({ state, actions }, { gameId, matchId }) => {
  try {
    state.games[gameId].matches[matchId].finished = true

    if (checkGameWinner({ game: state.games[gameId], rules: state.settings.rules }) != null ||
      matchId >= state.settings.rules.matches) {
      actions.gamesFinishGame({ gameId })
    } else {
      state.games[gameId].matches[matchId + 1] = formatMatch(matchId + 1)
      actions.navigationChangeNavigation({ matchId: matchId + 1 })
    }
  } catch (error) {
    console.error(error)
  }
}

const gamesFinishGame = ({ state, actions }, { gameId }) => {
  try {
    state.games[gameId].finished = true

    if (Object.values(state.games).filter(game => !game.finished).length === 0)
      actions.navigationChangeNavigation({ view: 'results' })
    else if (state.games[gameId + 1] != null)
      actions.navigationChangeNavigation({ gameId: gameId + 1, matchId: 1 })
  } catch (error) {
    console.error(error)
  }
}

const gameAddAdmonition = ({ state }, { gameId, matchId, name, adversaryScoreName }) => {
  state.contenders[name].admonitions++

  if (state.contenders[name].admonitions > state.settings.rules.maxAdmonitions)
    state.games[gameId].matches[matchId][adversaryScoreName]++
}

export default {
  gamesCreateGames,
  gamesEditGame,
  gamesEditMatch,
  gamesFinishMatch,
  gamesFinishGame,
  gameAddAdmonition,
}
