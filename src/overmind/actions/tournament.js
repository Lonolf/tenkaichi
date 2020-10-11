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
    actions.logger({ message: 'Tournament started' })
    state.tournament.startDate = new Date()

    createContenders({ state, contenders })

    actions.usersCreateUsers({ contenders })

    actions.gamesCreateGames()

    actions.navigationChangeNavigation({ gameId: 1, matchId: 1, view: 'game' })

    actions.logger({ message: 'Game 1 Match 1 start, contenders: ' + state.games['1'].conA + ' vs ' + state.games['1'].conB })
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
    actions.logger({ message: 'Tournament finished' })
    actions.navigationChangeNavigation({ view: 'results' })

    await effects.setTournament({ tournament: formatTournament(state) })
  } catch (error) {
    console.error(error)
  }
}

export default {
  tournamentCreateTournament,
  tournamentFinishTournament,
}
