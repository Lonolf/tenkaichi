import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

const errors = createSlice({
  name: 'errors',
  initialState: {},
  reducers: {
    createError: (state, { payload }) => {
      const errorId = uniqid()
      state[errorId] = { errorId, message: payload }
    },
    deleteError: (state, { payload }) => {
      if (state[payload] != null)
        delete state[payload]
    },
  },
})

const loading = createSlice({
  name: 'loading',
  initialState: {},
  reducers: {
    startLoading: (state, { payload: { loadingId, payload } }) => {
      state[loadingId] = payload
    },
    stopLoading: (state, { payload }) => {
      if (state[payload] != null)
        delete state[payload]
    },
    debug: () => {},
  },
})

const settings = createSlice({
  name: 'settings',
  initialState: {},
  reducers: {
    createSettings: (state, { payload }) => payload,
    editSettings: (state, { payload }) => ({ ...state, ...payload }),
  },
})

const user = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    createUser: (state, { payload }) => payload,
    editUser: (state, { payload }) => ({ ...state, ...payload }),
  },
})

export default [errors, loading, settings, user]
