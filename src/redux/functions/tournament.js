import { formatTournament } from 'redux/pureFunctions/format'
import firebase from 'utility/firebase'
import functions from 'redux/functions'
import store from 'redux/store'
import actions from 'redux/actions'
const { getState, dispatch } = store

const tournamentCreateTournament = ({ contenders }) => {
  try {
    dispatch(actions.logger({ message: 'Tournament started' }))

    dispatch(actions.tournamentCreateTournament())
    let state = getState()

    createContenders({ state, contenders })

    functions.usersCreateUsers({ contenders })

    functions.gamesCreateGames()

    state = getState()

    dispatch(actions.navigationEditNavigation({ gameId: 1, matchId: 1, view: 'game' }))

    dispatch(actions.logger({ message: 'Game 1 Match 1 start, contenders: ' + state.games['1'].conA + ' vs ' + state.games['1'].conB }))
  } catch (error) {
    console.error(error)
  }
}

const createContenders = ({ contenders }) => {
  dispatch(actions.contendersCreateContenders(contenders
    .filter(contender => contender.name !== '')
    .reduce((list, contender) => ({ ...list, [contender.name]: { ...contender, admonitions: 0 } }), {}),
  ))
}

const tournamentFinishTournament = async() => {
  try {
    dispatch(actions.logger({ message: 'Tournament finished' }))
    dispatch(actions.navigationEditNavigation({ view: 'results' }))

    const state = getState()
    await setTournament({ tournament: formatTournament(state) })
  } catch (error) {
    console.error(error)
  }
}

const setTournament = async({ tournament }) => {
  if (process.env.REACT_APP_ENV === 'production')
    await firebase.addCollectionDoc({ collectionId: 'tournaments', data: tournament, idName: 'gameId' })
}

export default {
  tournamentCreateTournament,
  tournamentFinishTournament,
}
