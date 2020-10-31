import { checkGameWinner } from 'redux/pureFunctions/gamesResults'
import { formatMatch } from 'redux/pureFunctions/format'
import functions from 'redux/functions'
import store from 'redux/store'
import actions from 'redux/actions'
const { getState, dispatch } = store

const matchesStartMatch = ({ gameId, matchId }) => {
  try {
    const match = getState().games[gameId].matches[matchId]
    const intervals = [...match.intervals, { start: (new Date()).getTime() }]

    dispatch(actions.matchesEditMatch({ gameId, matchId, values: { status: 'ongoing', intervals } }))

    dispatch(actions.logger({ message: `Game ${gameId} match ${matchId} start` }))
  } catch (error) {
    console.error(error)
  }
}

const matchesPauseMatch = ({ gameId, matchId }) => {
  const match = getState().games[gameId].matches[matchId]
  const intervals = [...match.intervals]
  intervals[match.intervals.length - 1] = { ...intervals[match.intervals.length - 1], stop: (new Date()).getTime() }

  dispatch(actions.matchesEditMatch({ gameId, matchId, values: { status: 'paused', intervals } }))

  dispatch(actions.logger({ message: `Game ${gameId} match ${matchId} pause` }))
}

const matchesUnpauseMatch = ({ gameId, matchId }) => {
  const match = getState().games[gameId].matches[matchId]
  const intervals = [...match.intervals, { start: (new Date()).getTime() }]

  dispatch(actions.matchesEditMatch({ gameId, matchId, values: { status: 'ongoing', intervals } }))

  dispatch(actions.logger({ message: `Game ${gameId} match ${matchId} unpause` }))
}

const matchesFinishMatch = ({ gameId, matchId }) => {
  try {
    let state = getState()
    const match = state.games[gameId].matches[matchId]
    const intervals = [...match.intervals]
    intervals[match.intervals.length - 1] = { ...intervals[match.intervals.length - 1], stop: (new Date()).getTime() }

    dispatch(actions.matchesEditMatch({ gameId, matchId, values: { status: 'finished', intervals } }))

    state = getState()
    if (checkGameWinner({ game: state.games[gameId], rules: state.rules }) != null ||
        matchId >= state.rules.matches) {
      functions.gamesFinishGame({ gameId })
    } else {
      dispatch(actions.matchesCreateMatch({ gameId, matchId: matchId + 1, values: formatMatch(matchId + 1) }))
      dispatch(actions.navigationEditNavigation({ matchId: matchId + 1 }))
    }
  } catch (error) {
    console.error(error)
  }
}

export default {
  matchesStartMatch,
  matchesPauseMatch,
  matchesUnpauseMatch,
  matchesFinishMatch,
}
