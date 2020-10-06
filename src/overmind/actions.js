import games from './actions/games'
import navigation from './actions/navigation'
import rules from './actions/rules'
import tournament from './actions/tournament'

const onStart = async({ state, effects }) => {
  state.users = await effects.getUsers()
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
  ...navigation,
  ...rules,
  ...tournament,
  onStart,
  reset,
  logger,
}
