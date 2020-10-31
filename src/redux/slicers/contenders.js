import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'contenders',
  initialState: {},
  reducers: {
    contendersCreateContenders: (state, { payload }) => payload,
  },
  extraReducers: {
    reset: () => ({}),
  },
})
