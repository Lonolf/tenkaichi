import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useActions, useOState } from 'overmind/index'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Modal from 'components/modal/Modal.jsx'

import translator from 'utility/translator'

const useStyles = makeStyles((theme) => ({
  settingsContainer: {
    padding: 25,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  fab: {
    position: 'fixed',
    top: 15,
    right: 15,
  },
}))

const SettingsSelector = ({ props: { setOpen = () => {} } = {} }) => {
  const classes = useStyles()
  const actions = useActions()
  const state = useOState()

  const handleChange = values =>
    actions.settingsEditSettings(values)

  const onClose = () => setOpen(false)

  return (
    <Modal props={{ onClose }}>
      <div className={classes.settingsContainer}>
        <Typography id='pointsToWin' variant='h4' gutterBottom>
          {translator.fromLabel('settingsSelector_title_label')}
        </Typography>
        <div style={{ height: 25 }} />
        <FormControlLabel
          control={(
            <Checkbox
              color='primary'
              checked={state.settings.swordAcademy}
              onChange={() => handleChange({ swordAcademy: !state.settings.swordAcademy })}
              name='doubleDeath'
            />
          )}
          label={translator.fromLabel('settingsSelector_swordAcademy_label')}
        />
        <div style={{ height: 25 }} />
        <FormControlLabel
          control={(
            <Checkbox
              color='primary'
              checked={state.settings.actionsButton}
              onChange={() => handleChange({ actionsButton: !state.settings.actionsButton })}
              name='doubleDeath'
            />
          )}
          label={translator.fromLabel('settingsSelector_actionsButton_label')}
        />
        <div style={{ flex: '1 0 25px' }} />
        <Button
          color='primary'
          variant='contained'
          onClick={() => actions.navigationChangeNavigation({ view: 'contendersSelector' })}
        >
          {translator.fromLabel('settingsSelector_close_button')}
        </Button>
      </div>
    </Modal>
  )
}

export default SettingsSelector
