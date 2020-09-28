import { derived } from 'overmind'
import results from './state/results'

const state = {
  navigation: {
    view: 'contendersSelector',
    gameId: null,
    matchId: null,
  },
  settings: {
    rules: {
      doubleDeath: true,
      pointsToWin: 5,
      pointsForVictory: 1,
      matches: 3,
      maxAdmonitions: 1,
    },
  },
  contenders: {},
  games: {},
  results: derived(results),
}

export default state
