import rulesets from 'assets/rulesets'

const rulesEditRules = ({ state }, values) => {
  try {
    state.rules = { ...state.rules, ...values, rulesetId: '' }
  } catch (error) {
    console.error(error)
  }
}

const rulesSetRuleset = ({ state }, { rulesetId }) => {
  try {
    state.rules = { ...state.rules, ...rulesets[rulesetId] }
  } catch (error) {
    console.error(error)
  }
}

export default {
  rulesEditRules,
  rulesSetRuleset,
}
