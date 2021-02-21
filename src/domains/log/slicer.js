import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'log',
  initialState: [],
  reducers: {
    logger: (state, { payload: { message, type = 'LOG' } }) => {
      state.push({
        dateTime: (new Date()).getTime(),
        message,
        type,
      })
    },
  },
  extraReducers: {
    reset: () => ([]),
  },
})
