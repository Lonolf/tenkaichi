import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

import ContendersSelector from 'views/contendersSelector/ContendersSelector.jsx'
import FooterButtons from 'views/footerButtons/FooterButtons'
import Game from 'views/game/Game.jsx'
import MenuBar from 'views/menuBar/MenuBar.jsx'
import Results from 'views/results/Results.jsx'
import RulesSelector from 'views/rulesSelector/RulesSelector.jsx'
import SettingsSelector from 'views/settingsSelector/SettingsSelector.jsx'
import Tutorial from 'views/tutorial/Tutorial.jsx'

// import { useUpdateParams } from 'hooks'

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    marginBottom: 100,
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
  // const updateParams = useUpdateParams()
  const state = useSelector(state => state)
  const view = state.navigation.view

  useEffect(() => {
    // updateParams({ pathname: '/' })
    // eslint-disable-next-line
  }, [])

  return (
    <div className={classes.mainContainer}>
      <div className={`${classes.secondContainer} ${classes.scrollbars}`}>
        {view === 'contendersSelector' ? <MenuBar /> : null}
        {view === 'contendersSelector' ? <ContendersSelector />
          : view === 'rulesSelector' ? <RulesSelector />
            : view === 'settingsSelector' ? <SettingsSelector />
              : view === 'game' ? <Game />
                : view === 'results' ? <Results />
                  : view === 'tutorial' ? <Tutorial />
                    : null}
        <FooterButtons />
      </div>
    </div>
  )
}

export default ContentManager
