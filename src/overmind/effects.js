import firebase from 'overmind/firebase/firebase'

const getUsers = () =>
  firebase.getCollectionDoc({ collectionId: 'users', docId: 'users' })

export default {
  getUsers,
}
