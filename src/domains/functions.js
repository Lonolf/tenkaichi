import basics from './basics/functions'
import games from './games/functions'
import matches from './matches/functions'
import navigation from './navigation/functions'
import rules from './rules/functions'
import settings from './settings/functions'
import tournament from './tournament/functions'
import users from './users/functions'

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
