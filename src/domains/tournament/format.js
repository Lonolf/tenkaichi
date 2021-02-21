export const formatTournament = ({
  startDate = Date.now(),
}) => ({
  startDate,
  endDate: Date.now(),
})
