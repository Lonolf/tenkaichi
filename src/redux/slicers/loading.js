import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'loading',
  initialState: [],
  reducers: {
    loadingCreateLoading: (state, { payload }) => {
      state.push(payload)
    },
    loadingDeleteLoading: (state, { payload }) => {
      state.splice(state.indexOf(payload), 1)
    },
  },
})
