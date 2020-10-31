/* global localStorage */
import store from 'redux/store'
import actions from 'redux/actions'
const { getState, dispatch } = store

const rulesEditRules = values => {
  dispatch(actions.rulesEditRules(values))

  const rules = (getState()).settings
  localStorage.setItem('tenkaichiRules', JSON.stringify(rules))
}

const rulesGetRules = async() => {
  const rules = await JSON.parse(localStorage.getItem('tenkaichiRules') || '[]')
  dispatch(actions.rulesEditRules(rules))
}

export default {
  rulesEditRules,
  rulesGetRules,
}
