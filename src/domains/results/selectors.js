import { calcPoints, calcDisparities } from './pureFunctions'
import { createSelector } from '@reduxjs/toolkit'

const selectGames = state => state.games
const selectContenders = state => state.contenders
const selectRules = state => state.rules
const selectResults = createSelector(
  [selectGames, selectContenders, selectRules],
  (games = {}, contenders = {}, rules) =>
    Object.values(games)
      .reduce((results, game) =>
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
        }),
        {})),
)

export default { selectResults }
