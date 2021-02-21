import firebase from 'utility/firebase'
import history from 'utility/history'

// import StackdriverErrorReporter from 'stackdriver-errors-js'

// export const errorHandler = new StackdriverErrorReporter()
// errorHandler.start({
//   key: 'AIzaSyDfHhxDZzB6Qap8pylkDgL08JhmaBH3ddE',
//   projectId: 'black-market-ac108',
// })

const createError = ({ error, dispatch }) => {
  console.error(error)

  // if (process.env.REACT_APP_ENV === 'production')
  //   errorHandler.report(payload)

  switch (error.code) {
    default:
      dispatch('createError', error.message)
      break
  }
}

const autoLogin = async({ dispatch, actions, call, functions } = {}) => {
  const user = await firebase.autoSignIn()

  if (user) {
    if (user.userEmail.split('@')[1] !== 'bytes.black')
      throw new Error('Access to console is reserved')
    dispatch(actions.createUser, user)
    call(functions.brands.getBrands)
    call(functions.users.getUsers)
  }
}

const login = async() => {
  await firebase.googleSignIn()
}

const logout = async({ dispatch, actions }) => {
  await firebase.signOut()
  dispatch(actions.createUser, {})
}

const navigate = async({ ...payload }) => {
  const pathnames = history.location.pathname.split('/')

  if (payload.view !== pathnames[1] || payload.position !== pathnames[2]) {
    let view = payload.view ?? pathnames[1] ?? ''
    let position = payload.position ?? pathnames[2] ?? ''

    history.push(`/${view}${view !== '' && position !== '' ? `/${position}` : ''}`)
  }
}

export default {
  createError,
  autoLogin,
  login,
  logout,
  navigate,
}
