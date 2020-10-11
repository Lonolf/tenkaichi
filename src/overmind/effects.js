/* global localStorage */
import firebase from 'overmind/firebase/firebase'

const usersGetUsers = async() =>
  JSON.parse(localStorage.getItem('tenkaichiUsers') || '[]')
    .reduce((list, user) => ({ ...list, [user]: { name: user } }), {})

const usersGetSwordAcademyUsers = async() =>
  Object.values(await firebase.getCollectionDoc({ collectionId: 'users', docId: 'users' }))
    .reduce((list, user) => ({ ...list, [user.name]: { ...user, association: 'swordAcademy' } }), {})

const usersSetUsers = async({ users }) => {
  const filterUsers = Object.values(users)
    .filter(user => user.association == null)
    .map(user => user.name)
  localStorage.setItem('tenkaichiUsers', JSON.stringify(filterUsers))
}

const setTournament = async({ tournament }) => {
  if (process.env.REACT_APP_ENV === 'production')
    await firebase.addCollectionDoc({ collectionId: 'tournaments', data: tournament, idName: 'gameId' })
}

export default {
  usersGetUsers,
  usersGetSwordAcademyUsers,
  usersSetUsers,
  setTournament,
}
