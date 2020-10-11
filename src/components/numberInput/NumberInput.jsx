import React from 'react'
import { useOState } from 'overmind/index'

import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'

const useStyles = makeStyles(theme => ({
  levelOne: {
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 5,
  },
}))

const NumberInput = ({ props: { value = 0, onChange = () => {} } = {} }) => {
  const classes = useStyles()
  useOState()

  return (
    <Toolbar disableGutters className={classes.levelOne}>
      <Fab
        onClick={() => onChange(value - 1)}
      >
        <Remove />
      </Fab>
      <div style={{ width: 25 }} />
      <Typography variant='h5'>{value}</Typography>
      <div style={{ width: 25 }} />
      <Fab
        onClick={() => onChange(value + 1)}
      >
        <Add />
      </Fab>
    </Toolbar>
  )
}

export default NumberInput
