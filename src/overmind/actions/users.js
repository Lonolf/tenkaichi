const usersGetSwordAcademyUsers = async({ state, effects }) => {
  state.users = { ...state.users, ...await effects.usersGetSwordAcademyUsers() }
  state.settings.swordAcademy = true
}

const usersGetUsers = async({ state, effects }) => {
  state.users = await effects.usersGetUsers()
}

const usersCreateUsers = async({ state, effects }, { contenders }) => {
  const filteredContenders = contenders
    .filter(contender => contender.name !== '' && state.users[contender.name] == null)
    .reduce((list, contender) => ({ ...list, [contender.name]: contender }), {})

  state.users = { ...state.users, ...filteredContenders }
  effects.usersSetUsers({ users: state.users })
}

export default {
  usersGetSwordAcademyUsers,
  usersGetUsers,
  usersCreateUsers,
}
