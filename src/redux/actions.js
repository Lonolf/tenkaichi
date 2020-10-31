import contenders from './slicers/contenders'
import errors from './slicers/errors'
import games from './slicers/games'
import loading from './slicers/loading'
import log from './slicers/log'
import navigation from './slicers/navigation'
import results from './slicers/results'
import rules from './slicers/rules'
import settings from './slicers/settings'
import tournament from './slicers/tournament'
import users from './slicers/users'

import { createAction } from '@reduxjs/toolkit'

const reset = createAction('reset')

const actions = {
  reset,
  ...contenders.actions,
  ...errors.actions,
  ...games.actions,
  ...loading.actions,
  ...log.actions,
  ...navigation.actions,
  ...results.actions,
  ...rules.actions,
  ...settings.actions,
  ...tournament.actions,
  ...users.actions,
}

export default actions
