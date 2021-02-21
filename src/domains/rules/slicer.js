import { createSlice } from '@reduxjs/toolkit'
import rulesets from 'assets/rulesets'

export default createSlice({
  name: 'rules',
  initialState: {
    rulesetId: '',
    doubleDeath: true,
    pointsToWin: 5,
    pointsForVictory: 1,
    matches: 3,
    maxAdmonitions: 1,
  },
  reducers: {
    rulesEditRules: (state, { payload }) =>
      ({ ...state, ...payload, rulesetId: '' }),
    rulesSetRuleset: (state, { payload }) =>
      ({ ...state, ...rulesets[payload] }),
  },
})
