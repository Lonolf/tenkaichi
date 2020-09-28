import contenders from './actions/contenders'
import games from './actions/games'
import navigation from './actions/navigation'
import settings from './actions/settings'

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
  ...contenders,
  ...games,
  ...navigation,
  ...settings,
  onStart,
  reset,
}
