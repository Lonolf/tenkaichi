const results = ({
  games = {},
  contenders = {},
  settings: { rules: { doubleDeath = true, pointsToWin = 5, pointsForVictory = 1 } },
}) =>
  Object.values(games).reduce((results, game) => {
    const newResults = { ...results }

    newResults[game.conA].hitsScored += game.scoreConA
    newResults[game.conA].hitsSuffered += game.scoreConB
    newResults[game.conB].hitsScored += game.scoreConB
    newResults[game.conB].hitsSuffered += game.scoreConA

    if (!(doubleDeath && game.scoreConA >= pointsToWin && game.scoreConB >= pointsToWin))
      if (game.scoreConA >= pointsToWin && game.scoreConA > game.scoreConB)
        newResults[game.conA].points += pointsForVictory
      else if (game.scoreConB >= pointsToWin && game.scoreConB > game.scoreConA)
        newResults[game.conB].points += pointsForVictory

    return newResults
  }, Object.keys(contenders)
    .reduce((list, contender) => ({ ...list, [contender]: { name: contender, points: 0, hitsScored: 0, hitsSuffered: 0 } }), {}))

export default results
