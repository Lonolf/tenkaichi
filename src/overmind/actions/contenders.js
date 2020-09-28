const contendersCreateContenders = ({ state, actions }, { contenders }) => {
  try {
    const filteredContenders = contenders.filter(contender => contender.name !== '')

    state.contenders = filteredContenders
      .reduce((list, contender) => ({ ...list, [contender.name]: { ...contender, admonitions: 0 } }), {})

    actions.gamesCreateGames({ filteredContenders })
  } catch (error) {
    console.error(error)
  }
}

export default {
  contendersCreateContenders,
}
