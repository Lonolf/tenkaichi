import { checkGameWinner } from 'overmind/functions/gamesResults'
import { formatMatch } from 'overmind/functions/format'

const matchesStartMatch = ({ state, actions }, { gameId, matchId }) => {
  try {
    state.games[gameId].matches[matchId].status = 'ongoing'

    actions.logger({ message: `Game ${gameId} match ${matchId} start` })
  } catch (error) {
    console.error(error)
  }
}

const matchesPauseMatch = ({ state, actions }, { gameId, matchId }) => {
  state.games[gameId].matches[matchId].status = 'paused'

  actions.logger({ message: `Game ${gameId} match ${matchId} pause` })
}

const matchesUnpauseMatch = ({ state, actions }, { gameId, matchId }) => {
  state.games[gameId].matches[matchId].status = 'ongoing'

  actions.logger({ message: `Game ${gameId} match ${matchId} unpause` })
}

const matchesEditMatch = ({ state }, { gameId, matchId, ...values }) => {
  state.games[gameId].matches[matchId] = { ...state.games[gameId].matches[matchId], ...values }
}

const matchesFinishMatch = ({ state, actions }, { gameId, matchId }) => {
  try {
    state.games[gameId].matches[matchId].status = 'finished'

    if (checkGameWinner({ game: state.games[gameId], rules: state.rules }) != null ||
        matchId >= state.rules.matches) {
      actions.gamesFinishGame({ gameId })
    } else {
      state.games[gameId].matches[matchId + 1] = formatMatch(matchId + 1)
      actions.navigationChangeNavigation({ matchId: matchId + 1 })
    }
  } catch (error) {
    console.error(error)
  }
}

export default {
  matchesStartMatch,
  matchesPauseMatch,
  matchesUnpauseMatch,
  matchesEditMatch,
  matchesFinishMatch,
}
