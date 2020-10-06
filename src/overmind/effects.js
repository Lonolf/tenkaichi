import firebase from 'overmind/firebase/firebase'

const getUsers = async() =>
  await firebase.getCollectionDoc({ collectionId: 'users', docId: 'users' })

const setTournament = async({ tournament }) => {
  if (process.env.REACT_APP_ENV === 'production')
    await firebase.addCollectionDoc({ collectionId: 'tournaments', data: tournament, idName: 'gameId' })
}

export default {
  getUsers,
  setTournament,
}
