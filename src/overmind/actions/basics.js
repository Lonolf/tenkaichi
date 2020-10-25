import uniqid from 'uniqid'

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

const createLoading = ({ state }, { type }) => {
  state.loading.push(type)
}

const deleteLoading = ({ state }, { type }) => {
  state.loading.splice(state.loading.indexOf(type), 1)
}

const createError = ({ state, actions }, { error }) => {
  const errorId = uniqid()
  state.errors[errorId] = { errorId, message: error.message }

  setTimeout(() => {
    actions.deleteError({ errorId })
  }, 5000)
}

const deleteError = ({ state }, { errorId }) => {
  delete state.errors[errorId]
}

export default {
  onStart,
  reset,
  logger,
  createLoading,
  deleteLoading,
  createError,
  deleteError,
}
