import { derived } from 'overmind'

const calcResults = state =>
  Object.values(state.games).reduce((results, game) => {
    if (!game.finished) return results

    const newResults = { ...results }
    if (game.scoreConA >= 5 && game.scoreConB < 5)
      newResults[game.conA] += 1
    else if (game.scoreConA < 5 && game.scoreConB >= 5)
      newResults[game.conB] += 1

    return newResults
  }, Object.keys(state.contenders)
    .reduce((list, contender) => ({ ...list, [contender]: 0 }), {}))

const state = {
  contenders: {},
  games: {},
  results: derived(calcResults),
}

export default state
