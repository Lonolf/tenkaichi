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

export default {
  ...games,
  ...navigation,
  ...rules,
  ...tournament,
  onStart,
  reset,
}
