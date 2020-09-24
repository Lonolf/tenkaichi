const results = ({
  games = {},
  contenders = {},
  settings: { rules: { doubleDeath = true, pointsToWin = 5, pointsForVictory = 1 } },
}) =>
  Object.values(games).reduce((results, game) => {
    if (!game.finished) return results

    const newResults = { ...results }

    if (!(doubleDeath && game.scoreConA >= pointsToWin && game.scoreConB >= pointsToWin))
      if (game.scoreConA >= pointsToWin && game.scoreConA > game.scoreConB)
        newResults[game.conA] += pointsForVictory
      else if (game.scoreConB >= pointsToWin && game.scoreConB > game.scoreConA)
        newResults[game.conB] += pointsForVictory

    return newResults
  }, Object.keys(contenders)
    .reduce((list, contender) => ({ ...list, [contender]: 0 }), {}))

export default results
