const rulesEditRules = ({ state }, values) => {
  try {
    state.rules = { ...state.rules, ...values }
  } catch (error) {
    console.error(error)
  }
}

export default {
  rulesEditRules,
}
