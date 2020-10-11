const usersGetUsers = async({ state, effects }) => {
  state.users = await effects.getUsers()
}

const usersCreateUsers = async({ state, effects }, { contenders }) => {
  const filteredContenders = contenders
    .filter(contender => contender.name !== '' && state.users[contender.name] == null)
    .reduce((list, contender) => ({ ...list, [contender.name]: contender }), {})

  state.users = { ...state.users, ...filteredContenders }
  effects.usersSetUsers({ users: state.users })
}

export default {
  usersGetUsers,
  usersCreateUsers,
}
