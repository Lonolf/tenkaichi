import React from 'react'

import { useActions } from 'overmind/index'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

import LiveHelp from '@material-ui/icons/LiveHelp'
import Menu from '@material-ui/icons/Menu'

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
        color='primary'
        variant='outlined'
        onClick={() => actions.navigationChangeNavigation({ view: 'tutorial' })}
      >
        <LiveHelp />
      </Button>
      <Button
        color='primary'
        variant='outlined'
        onClick={() => actions.navigationChangeNavigation({ view: 'rulesSelector' })}
      >
        <Menu />
      </Button>
    </Toolbar>
  )
}

export default MenuBar
