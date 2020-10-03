import { derived } from 'overmind'
import results from './state/results'

const state = {
  contenders: {},
  games: {},
  log: [],
  navigation: {
    view: 'contendersSelector',
    gameId: null,
    matchId: null,
  },
  rules: {
    doubleDeath: true,
    pointsToWin: 5,
    pointsForVictory: 1,
    matches: 3,
    maxAdmonitions: 1,
  },
  tournament: {
  },
  results: derived(results),
  users: {},
}

export default state
