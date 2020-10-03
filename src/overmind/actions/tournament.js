const formatTournament = ({
  games,
  contenders,
  tournament,
  rules,
}) => ({
  tournament: {
    ...tournament,
    endDate: new Date(),
  },
  contenders,
  games,
  rules,
})

const tournamentCreateTournament = ({ state, actions }, { contenders }) => {
  try {
    state.tournament.startDate = new Date()
    createContenders({ state, contenders })

    actions.gamesCreateGames()

    actions.navigationChangeNavigation({ gameId: 1, matchId: 1, view: 'game' })
  } catch (error) {
    console.error(error)
  }
}

const createContenders = ({ state, contenders }) => {
  state.contenders = contenders.filter(contender => contender.name !== '')
    .reduce((list, contender) => ({ ...list, [contender.name]: { ...contender, admonitions: 0 } }), {})
}

const tournamentFinishTournament = async({ state, actions, effects }) => {
  try {
    actions.navigationChangeNavigation({ view: 'results' })

    if (process.env.REACT_APP_ENV === 'production')
      await effects.setTournament({ tournament: formatTournament(state) })
  } catch (error) {
    console.error(error)
  }
}

export default {
  tournamentCreateTournament,
  tournamentFinishTournament,
}
