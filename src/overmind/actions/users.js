const usersGetSwordAcademyUsers = async({ state, effects }) => {
  state.users = { ...state.users, ...await effects.usersGetSwordAcademyUsers() }
  state.settings.swordAcademy = true
}

const usersGetUsers = async({ state, actions, effects }) => {
  try {
    actions.createLoading('getUsers')
    state.users = await effects.usersGetUsers()
    actions.deleteLoading('getUsers')
  } catch (error) {
    console.error(error)
    actions.createError(error)
  }
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
