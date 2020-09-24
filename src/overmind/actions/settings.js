const settingsEditRules = ({ state }, values) => {
  try {
    state.settings.rules = { ...state.settings.rules, ...values }
  } catch (error) {
    console.error(error)
  }
}

export default {
  settingsEditRules,
}
