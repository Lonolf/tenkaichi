import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'navigation',
  initialState: {
    view: 'contendersSelector',
    gameId: null,
    matchId: null,
  },
  reducers: {
    navigationEditNavigation: (state, { payload }) => ({
      ...state, ...payload,
    }),
  },
  extraReducers: {
    reset: () => ({
      view: 'contendersSelector',
      gameId: null,
      matchId: null,
    }),
  },
})
