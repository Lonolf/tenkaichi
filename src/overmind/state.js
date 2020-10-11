import { derived } from 'overmind'
import results from './state/results'

const state = {
  contenders: {},
  games: {
    // 1: {
    //   conA: '',
    //   conB: '',
    //   gameId: 1,
    //   matches: {
    //     1: {
    //       status: 'ready', 'ongoing', 'paused', 'finished',
    //       matchId: 1,
    //       scoreConA: 0,
    //       scoreConB: 0,
    //     }
    //   }
    // }
  },
  log: [
    // { dateTime: dateTime, type: 'LOG', message: '' }
  ],
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
  settings: {
    swordAcademy: false,
    actionsButton: true,
  },
  users: {},
}

export default state
