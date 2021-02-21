/* global localStorage */
const rulesEditRules = ({ getState, dispatch, actions, call, functions, ...values }) => {
  dispatch(actions.rulesEditRules, values)

  const rules = (getState()).settings
  localStorage.setItem('tenkaichiRules', JSON.stringify(rules))
}

const rulesGetRules = async({ dispatch, actions }) => {
  const rules = await JSON.parse(localStorage.getItem('tenkaichiRules') || '[]')
  dispatch(actions.rulesEditRules, rules)
}

export default {
  rulesEditRules,
  rulesGetRules,
}
