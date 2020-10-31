import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export default createSlice({
  name: 'tournament',
  initialState: {},
  reducers: {
    tournamentCreateTournament: (state) => ({ startDate: moment().valueOf() }),
  },
})
