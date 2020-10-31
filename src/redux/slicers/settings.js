import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'settings',
  initialState: {
    swordAcademy: false,
    actionsButton: true,
    theme: 'dark',
  },
  reducers: {
    settingsEditSettings: (state, { payload }) =>
      ({ ...state, ...payload }),
  },
})
