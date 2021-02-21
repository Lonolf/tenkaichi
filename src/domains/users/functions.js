/* global localStorage */
import firebase from 'utility/firebase'

const usersGetSwordAcademyUsers = async({ dispatch, actions }) => {
  const swordAcademyUsers = Object.values(await firebase.getCollectionDoc({ collectionId: 'users', docId: 'users' }))
    .reduce((list, user) => ({ ...list, [user.name]: { ...user, association: 'swordAcademy' } }), {})

  dispatch(actions.usersEditUsers, swordAcademyUsers)
  dispatch(actions.settingsEditSettings, { swordAcademy: true })
}

const usersGetUsers = async({ dispatch, actions }) => {
  const users = await getUsersFromLocalStorage()
  dispatch(actions.usersEditUsers, (users))
}

const usersCreateUsers = async({ getState, dispatch, actions, call, contenders }) => {
  const state = getState()

  const filteredContenders = contenders
    .filter(contender => contender.name !== '' && state.users[contender.name] == null)
    .reduce((list, contender) => ({ ...list, [contender.name]: contender }), {})

  dispatch(actions.usersEditUsers, filteredContenders)

  call(setUserToLocalStorage)
}

const getUsersFromLocalStorage = async() =>
  JSON.parse(localStorage.getItem('tenkaichiUsers') || '[]')
    .reduce((list, user) => ({ ...list, [user]: { name: user } }), {})

const setUserToLocalStorage = async({ getState }) => {
  const state = getState()
  const filterUsers = Object.values(state.users)
    .filter(user => user.association == null)
    .map(user => user.name)
  localStorage.setItem('tenkaichiUsers', JSON.stringify(filterUsers))
}

export default {
  usersGetSwordAcademyUsers,
  usersGetUsers,
  usersCreateUsers,
}
