import basics from './actions/basics'
import games from './actions/games'
import matches from './actions/matches'
import navigation from './actions/navigation'
import rules from './actions/rules'
import settings from './actions/settings'
import tournament from './actions/tournament'
import users from './actions/users'

export default {
  ...basics,
  ...games,
  ...matches,
  ...navigation,
  ...rules,
  ...settings,
  ...tournament,
  ...users,
}
