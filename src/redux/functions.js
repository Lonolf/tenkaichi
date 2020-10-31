import games from './functions/games'
import matches from './functions/matches'
import navigation from './functions/navigation'
import rules from './functions/rules'
import settings from './functions/settings'
import tournament from './functions/tournament'
import users from './functions/users'

const onStart = async() => {
  users.usersGetUsers()
  rules.rulesGetRules()
  settings.settingsGetSettings()
}

const functions = {
  onStart,
  ...games,
  ...matches,
  ...navigation,
  ...settings,
  ...rules,
  ...tournament,
  ...users,
}

export default functions
