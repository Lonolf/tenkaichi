import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles(theme => ({
  topBarContainer: {
    width: '100%',
    justifyContent: 'space-between',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    backgroundColor: theme.palette.background.paper,
    padding: '20px 0px',
  },
  fab: {
    position: 'fixed',
    right: 25,
    bottom: 25,
  },
}))

const TopBar = () => {
  const classes = useStyles()
  const state = useSelector(state => state)

  const gameId = Number(state.navigation.gameId)
  const matchId = Number(state.navigation.matchId)

  if (state.games[gameId] == null || state.games[gameId].matches[matchId] == null)
    return null

  return (
    <Toolbar className={classes.topBarContainer} disableGutters />
  )
}

export default TopBar
