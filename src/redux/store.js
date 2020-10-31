import { configureStore } from '@reduxjs/toolkit'
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

export default configureStore({
  reducer: {
    contenders: contenders.reducer,
    errors: errors.reducer,
    games: games.reducer,
    loading: loading.reducer,
    log: log.reducer,
    navigation: navigation.reducer,
    results: results.reducer,
    rules: rules.reducer,
    settings: settings.reducer,
    tournament: tournament.reducer,
    users: users.reducer,
  },
})
