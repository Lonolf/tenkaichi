import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'games',
  initialState: {},
  reducers: {
    reducerGamesCreateGames: (state, { payload }) => payload,
    reducerGamesEditGame: (state, { payload: { gameId, values } }) => {
      state[gameId] = { ...state[gameId], ...values }
    },
    matchesCreateMatch: (state, { payload: { gameId, matchId, values = {} } }) => {
      state[gameId].matches[matchId] = values
    },
    matchesEditMatch: (state, { payload: { gameId, matchId, values = {} } }) => {
      state[gameId].matches[matchId] = { ...state[gameId].matches[matchId], ...values }
    },
    matchesCreateAction: (state, { payload: { gameId, matchId, scoreConA, scoreConB } }) => {
      const match = state[gameId].matches[matchId]
      if (scoreConA != null)
        match.scoreConA += scoreConA
      if (scoreConB != null)
        match.scoreConB += scoreConB
    },
  },
  extraReducers: {
    reset: () => ({}),
  },
})
