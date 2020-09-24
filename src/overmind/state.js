import { derived } from 'overmind'
import results from './state/results'

const state = {
  settings: {
    rules: {
      doubleDeath: true,
      pointsToWin: 5,
      pointsForVictory: 1,
    },
  },
  contenders: {},
  games: {},
  results: derived(results),
}

export default state
