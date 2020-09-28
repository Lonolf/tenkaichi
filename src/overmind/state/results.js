import { calcPoints, calcDisparities } from 'overmind/functions/gamesResults'

const results = ({
  games = {},
  contenders = {},
  settings: { rules },
}) =>
  Object.values(games).reduce((results, game) =>
    calcPoints({
      newResults: Object.values(game.matches).reduce((newResults, match) =>
        calcDisparities({ newResults, game, match }), { ...results }),
      game,
      rules,
    }), Object.keys(contenders)
    .reduce((list, contender) => ({
      ...list,
      [contender]: {
        name: contender,
        points: 0,
        hitsScored: 0,
        hitsSuffered: 0,
        disparity: 0,
        gamesWin: 0,
        gamesLost: 0,
        matchesWin: 0,
        matchesLost: 0,
      },
    }), {}))

export default results
