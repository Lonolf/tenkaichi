const settingsEditSettings = ({ state }, values) => {
  try {
    state.settings = { ...state.settings, ...values }
  } catch (error) {
    console.error(error)
  }
}

export default {
  settingsEditSettings,
}
