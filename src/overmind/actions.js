import { history } from 'index'

import contenders from './actions/contenders'
import games from './actions/games'
import settings from './actions/settings'

const changeLogin = ({ state, effects, actions }) => {
  startLoading({ state, value: 'changeLogin' })
  try {
    state.auth.isLoggedIn = !state.auth.isLoggedIn
  } catch (error) {
    console.error(error)
  }
  stopLoading({ state, value: 'changeLogin' })
}

const startLoading = ({ state, value }) => {
  state.loading.push(value)
}

const stopLoading = ({ state, value }) => {
  if (state.loading.includes(value))
    state.loading.splice(state.loading.indexOf(value))
}

const reset = ({ state }) => {
  state.games = {}
  state.contenders = {}

  history.push('/')
}

export default {
  ...contenders,
  ...games,
  ...settings,
  changeLogin,
  reset,
}
