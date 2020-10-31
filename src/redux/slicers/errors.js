import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export default createSlice({
  name: 'errors',
  initialState: {},
  reducers: {
    errorCreateError: (state, { payload }) => {
      const errorId = uniqid()
      state[errorId] = { errorId, message: payload }
    },
    errorDeleteError: (state, { payload }) => {
      delete state[payload]
    },
  },
})
