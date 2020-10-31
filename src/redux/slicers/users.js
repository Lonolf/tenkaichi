import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    usersEditUsers: (state, { payload }) =>
      ({ ...state, ...payload }),
  },
})
