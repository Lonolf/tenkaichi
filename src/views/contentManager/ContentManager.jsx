import React, { useEffect } from 'react'

import { useOState } from 'overmind/index'

import { makeStyles } from '@material-ui/core/styles'

import ContendersSelector from 'views/contendersSelector/ContendersSelector.jsx'
import RulesSelector from 'views/rulesSelector/RulesSelector.jsx'
import Game from 'views/game/Game.jsx'
import Results from 'views/results/Results.jsx'

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
    padding: '5%',
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
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
  const state = useOState()
  const view = state.navigation.view

  useEffect(() => {
    updateParams({ pathname: '/' })
    // eslint-disable-next-line
  }, [])

  return (
    <div className={classes.mainContainer}>
      <div className={`${classes.secondContainer} ${classes.scrollbars}`}>
        {view === 'contendersSelector'
          ? (
            <>
              <RulesSelector />
              <ContendersSelector />
            </>
          ) : view === 'game' ? <Game />
            : view === 'results' ? <Results />
              : null
        }
      </div>
    </div>
  )
}

export default ContentManager
