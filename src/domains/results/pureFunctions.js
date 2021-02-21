export const calcDisparities = ({ newResults, game, match }) => {
  newResults[game.conA].hitsScored += match.scoreConA
  newResults[game.conA].hitsSuffered += match.scoreConB
  newResults[game.conA].disparity = newResults[game.conA].hitsScored - newResults[game.conA].hitsSuffered
  newResults[game.conB].hitsScored += match.scoreConB
  newResults[game.conB].hitsSuffered += match.scoreConA
  newResults[game.conB].disparity = newResults[game.conB].hitsScored - newResults[game.conB].hitsSuffered

  return newResults
}

export const calcPoints = ({ newResults, game, rules, rules: { matches = 1, pointsForVictory = 2 } }) => {
  const { aWins, bWins } = calcMatchesVictories({ game, rules })

  newResults = assignMatchesVictories({ newResults, game, aWins, bWins })
  const mininumToWin = Math.floor(matches / 2) + 1

  if (aWins >= mininumToWin) {
    newResults[game.conA].points += pointsForVictory
    newResults[game.conA].gamesWin++
    newResults[game.conB].gamesLost++
  } else if (bWins >= mininumToWin) {
    newResults[game.conB].points += pointsForVictory
    newResults[game.conB].gamesWin++
    newResults[game.conA].gamesLost++
  }
  return newResults
}

const calcMatchesVictories = ({ game, rules: { doubleDeath = true, pointsToWin = 5 } }) =>
  Object.values(game.matches).reduce((matchesResults, match) => {
    if (match.status === 'finished' && !(doubleDeath && match.scoreConA >= pointsToWin && match.scoreConB >= pointsToWin))
      if (match.scoreConA >= pointsToWin && match.scoreConA > match.scoreConB)
        matchesResults.aWins++
      else if (match.scoreConB >= pointsToWin && match.scoreConB > match.scoreConA)
        matchesResults.bWins++
    return matchesResults
  }, { aWins: 0, bWins: 0 })

const assignMatchesVictories = ({ newResults, game, aWins, bWins }) => {
  newResults[game.conA].matchesWin += aWins
  newResults[game.conA].matchesLost += bWins
  newResults[game.conB].matchesWin += bWins
  newResults[game.conB].matchesLost += aWins

  return newResults
}

export const checkGameWinner = ({ game, rules, rules: { matches = 1 } }) => {
  const { aWins, bWins } = calcMatchesVictories({ game, rules })
  const mininumToWin = Math.floor(matches / 2) + 1

  if (aWins >= mininumToWin)
    return game.conA
  else if (bWins >= mininumToWin)
    return game.conB
  else
    return null
}
