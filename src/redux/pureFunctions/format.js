export const formatMatch = matchId => ({
  matchId,
  scoreConA: 0,
  scoreConB: 0,
  status: 'ready',
  intervals: [],
})

export const formatTournament = ({
  games,
  contenders,
  tournament,
  rules,
}) => ({
  tournament: {
    ...tournament,
    endDate: (new Date()).getTime(),
  },
  contenders,
  games,
  rules,
})
