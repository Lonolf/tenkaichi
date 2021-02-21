import { formatTournament } from './format'
import firebase from 'utility/firebase'

const tournamentCreateTournament = ({ getState, dispatch, actions, call, functions, contenders }) => {
  dispatch(actions.logger, { message: 'Tournament started' })

  dispatch(actions.tournamentCreateTournament)
  let state = getState()

  call(createContenders, { state, contenders })

  call(functions.usersCreateUsers, { contenders })

  call(functions.gamesCreateGames)

  state = getState()

  dispatch(actions.navigationEditNavigation, { gameId: 1, matchId: 1, view: 'game' })

  dispatch(actions.logger, { message: 'Game 1 Match 1 start, contenders: ' + state.games['1'].conA + ' vs ' + state.games['1'].conB })
}

const createContenders = ({ dispatch, actions, contenders }) => {
  dispatch(actions.contendersCreateContenders, contenders
    .filter(contender => contender.name !== '')
    .reduce((list, contender) => ({ ...list, [contender.name]: { ...contender, admonitions: 0 } }), {}),
  )
}

const tournamentFinishTournament = async({ getState, dispatch, actions }) => {
  dispatch(actions.logger, { message: 'Tournament finished' })
  dispatch(actions.navigationEditNavigation, { view: 'results' })

  const state = getState()
  await saveTournament({
    tournament: formatTournament(state.tournament),
    rules: state.rules,
    games: state.games,
    contenders: state.contenders,
  })
}

const saveTournament = async({ tournament }) => {
  if (process.env.REACT_APP_ENV === 'production')
    await firebase.addCollectionDoc({ collectionId: 'tournaments', data: tournament, idName: 'gameId' })
}

export default {
  tournamentCreateTournament,
  tournamentFinishTournament,
}
