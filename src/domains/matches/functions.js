import { checkGameWinner } from 'domains/results/pureFunctions'
import { formatMatch } from './format'

const matchesStartMatch = ({ getState, dispatch, actions, gameId, matchId }) => {
  const match = getState().games[gameId].matches[matchId]
  const intervals = [...match.intervals, { start: (new Date()).getTime() }]

  dispatch(actions.matchesEditMatch, { gameId, matchId, values: { status: 'ongoing', intervals } })

  dispatch(actions.logger, { message: `Game ${gameId} match ${matchId} start` })
}

const matchesPauseMatch = ({ getState, dispatch, actions, gameId, matchId }) => {
  const match = getState().games[gameId].matches[matchId]
  const intervals = [...match.intervals]
  intervals[match.intervals.length - 1] = { ...intervals[match.intervals.length - 1], stop: (new Date()).getTime() }

  dispatch(actions.matchesEditMatch, { gameId, matchId, values: { status: 'paused', intervals } })

  dispatch(actions.logger, { message: `Game ${gameId} match ${matchId} pause` })
}

const matchesUnpauseMatch = ({ getState, dispatch, actions, gameId, matchId }) => {
  const match = getState().games[gameId].matches[matchId]
  const intervals = [...match.intervals, { start: (new Date()).getTime() }]

  dispatch(actions.matchesEditMatch, { gameId, matchId, values: { status: 'ongoing', intervals } })

  dispatch(actions.logger, { message: `Game ${gameId} match ${matchId} unpause` })
}

const matchesFinishMatch = ({ getState, dispatch, actions, call, functions, gameId, matchId }) => {
  let state = getState()
  const match = state.games[gameId].matches[matchId]
  const intervals = [...match.intervals]
  intervals[match.intervals.length - 1] = { ...intervals[match.intervals.length - 1], stop: (new Date()).getTime() }

  dispatch(actions.matchesEditMatch, { gameId, matchId, values: { status: 'finished', intervals } })

  state = getState()
  if (checkGameWinner({ game: state.games[gameId], rules: state.rules }) != null ||
        matchId >= state.rules.matches) {
    call(functions.gamesFinishGame, { gameId })
  } else {
    dispatch(actions.matchesCreateMatch, { gameId, matchId: matchId + 1, values: formatMatch(matchId + 1) })
    dispatch(actions.navigationEditNavigation, { matchId: matchId + 1 })
  }
}

export default {
  matchesStartMatch,
  matchesPauseMatch,
  matchesUnpauseMatch,
  matchesFinishMatch,
}
