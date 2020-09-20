import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { Route } from 'react-router-dom'
import ContendersSelector from 'views/contendersSelector/ContendersSelector'
import Game from 'views/game/Game'
import Results from 'views/results/Results'

import { useUpdateParams } from 'hooks'

const useStyles = makeStyles(theme => ({
  scrollbars: {
    '&::-webkit-scrollbar': {
      width: '0.5em',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: '1px solid slategrey',
      borderRadius: 4,
    },
    overflowX: 'auto',
    overflowY: 'auto  ',
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.contrastText,
  },
  secondContainer: {
    padding: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
  },
  siderbarMain: {
    flex: 3,
    border: '2px solid white',
    minHeight: '100%',
    paddingRight: '1%',
    paddingBottom: 50,
  },
}))

const ContentManager = () => {
  const classes = useStyles()
  const updateParams = useUpdateParams()

  useEffect(() => {
    updateParams({ pathname: '/' })
    // eslint-disable-next-line
  }, [])

  return (
    <div className={classes.mainContainer}>
      <div className={`${classes.secondContainer} ${classes.scrollbars}`}>
        <Route exact path='/'><ContendersSelector /></Route>
        <Route path='/game/:gameId?'><Game /></Route>
        <Route path='/results'><Results /></Route>
      </div>
    </div>
  )
}

export default ContentManager
