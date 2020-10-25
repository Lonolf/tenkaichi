import React from 'react'

import { useActions } from 'overmind/index'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

import Help from '@material-ui/icons/Help'
import MenuBook from '@material-ui/icons/MenuBook'
import Settings from '@material-ui/icons/Settings'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: '100%',
    justifyContent: 'space-between',
  },
  fab01: {
    position: 'fixed',
    top: 15,
    right: 15,
  },
}))

const MenuBar = () => {
  const classes = useStyles()
  const actions = useActions()

  return (
    <Toolbar className={classes.toolbar}>
      <Button
        color='secondary'
        variant='outlined'
        onClick={() => window.open('https://github.com/Lonolf/tenkaichi', '_blank')}
      >
        <Help />
      </Button>
      <Button
        color='secondary'
        variant='outlined'
        onClick={() => actions.navigationChangeNavigation({ view: 'rulesSelector' })}
      >
        <MenuBook />
      </Button>
      <Button
        color='secondary'
        variant='outlined'
        onClick={() => actions.navigationChangeNavigation({ view: 'settingsSelector' })}
      >
        <Settings />
      </Button>
    </Toolbar>
  )
}

export default MenuBar
