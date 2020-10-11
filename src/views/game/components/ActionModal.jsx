import React, { useState } from 'react'
import { useOState, useActions } from 'overmind/index'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

import Modal from 'components/modal/Modal'
import NumberInput from 'components/numberInput/NumberInput'

import { Divider, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '5%',
    display: 'flex',
    flexDirection: 'column',
  },
  levelTwo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  levelThree: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
  },
  buttonBar: {
    width: '100%',
    justifyContent: 'space-between',
  },
}))

const ActionModal = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({ scoreConA: 0, scoreConB: 0 })
  const state = useOState()
  const actions = useActions()
  const gameId = Number(state.navigation.gameId)
  const matchId = Number(state.navigation.matchId)

  const game = state.games[gameId]
  const match = game.matches[matchId]

  const onCancel = () => {
    setOpen(false)
    setValues({ scoreConA: 0, scoreConB: 0 })
  }

  const onSave = () => {
    actions.matchesCreateAction({ gameId, matchId, scoreConA: values.scoreConA, scoreConB: values.scoreConB })
    onCancel(false)
  }

  return (
    <>
      <Button
        id='openActionModal'
        variant='contained'
        color='primary'
        onClick={() => setOpen(true)}
        disabled={match.status !== 'ongoing'}
      >
        ACTION
      </Button>
      {open
        ? (
          <Modal>
            <div className={classes.container}>
              <div style={{ flex: '1 1 10px' }} />
              <div className={classes.levelTwo}>
                <div className={classes.levelThree}>
                  <Typography variant='h5'>{game.conA}</Typography>
                  <NumberInput props={{ value: values.scoreConA, onChange: value => setValues({ ...values, scoreConA: value }) }} />
                </div>
              </div>
              <div style={{ flex: '1 1 10px' }} />
              <Divider />
              <Toolbar className={classes.buttonBar}>
                <Button
                  variant='outlined'
                  color='secondary'
                  onClick={onCancel}
                >
                  CANCEL
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={onSave}
                >
                  SAVE
                </Button>
              </Toolbar>
              <Divider />
              <div style={{ flex: '1 1 10px' }} />
              <div className={classes.levelTwo}>
                <div className={classes.levelThree}>
                  <Typography variant='h5'>{game.conB}</Typography>
                  <NumberInput props={{ value: values.scoreConB, onChange: value => setValues({ ...values, scoreConB: value }) }} />
                </div>
              </div>
              <div style={{ flex: '1 1 10px' }} />
            </div>
          </Modal>
        ) : null}
    </>
  )
}

export default ActionModal
