/* global localStorage */

const settingsEditSettings = ({ getState, dispatch, actions, values }) => {
  dispatch(actions.settingsEditSettings, values)
  const settings = (getState()).settings
  localStorage.setItem('tenkaichiSettings', JSON.stringify(settings))
}

const settingsGetSettings = async({ dispatch, actions }) => {
  const settings = await JSON.parse(localStorage.getItem('tenkaichiSettings') || '[]')
  dispatch(actions.settingsEditSettings, settings)
}

export default {
  settingsEditSettings,
  settingsGetSettings,
}
