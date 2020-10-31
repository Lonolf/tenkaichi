/* global localStorage */
import store from 'redux/store'
import actions from 'redux/actions'
const { getState, dispatch } = store

const settingsEditSettings = values => {
  dispatch(actions.settingsEditSettings(values))
  const settings = (getState()).settings
  localStorage.setItem('tenkaichiSettings', JSON.stringify(settings))
}

const settingsGetSettings = async() => {
  const settings = await JSON.parse(localStorage.getItem('tenkaichiSettings') || '[]')
  dispatch(actions.settingsEditSettings(settings))
}

export default {
  settingsEditSettings,
  settingsGetSettings,
}
