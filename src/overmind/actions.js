import games from './actions/games'
import matches from './actions/matches'
import navigation from './actions/navigation'
import rules from './actions/rules'
import settings from './actions/settings'
import tournament from './actions/tournament'
import users from './actions/users'

const onStart = async({ actions }) => {
  actions.usersGetUsers()
}

const reset = ({ state }) => {
  state.games = {}
  state.contenders = {}

  state.navigation = {
    view: 'contendersSelector',
    gameId: null,
    matchId: null,
  }
  state.log = []
}

const logger = ({ state }, { message, type = 'LOG' }) => {
  state.log.push({
    dateTime: new Date(),
    message,
    type,
  })
}

export default {
  ...games,
  ...matches,
  ...navigation,
  ...rules,
  ...settings,
  ...tournament,
  ...users,
  onStart,
  reset,
  logger,
}
