import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'tournament',
  initialState: {},
  reducers: {
    createTournament: (state, { payload }) => ({ ...payload }),
  },
})
