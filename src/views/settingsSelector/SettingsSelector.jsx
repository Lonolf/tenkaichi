import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import actions from 'redux/actions'
import functions from 'redux/functions'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import Toolbar from '@material-ui/core/Toolbar'

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
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const handleChange = values => {
    functions.settingsEditSettings(values)
  }

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
              checked={state.settings.actionsButton}
              onChange={() => handleChange({ actionsButton: !state.settings.actionsButton })}
              name='doubleDeath'
            />
          )}
          label={translator.fromLabel('settingsSelector_actionsButton_label')}
        />
        <div style={{ flex: '0 0 25px' }} />
        <Toolbar>
          {translator.fromLabel('settingsSelector_darkTheme_label')}
          <Switch
            checked={state.checkedB}
            onChange={() => handleChange({ theme: state.settings.theme === 'dark' ? 'light' : 'dark' })}
            name='theme'
            color='primary'
          />
          {translator.fromLabel('settingsSelector_lightTheme_label')}
        </Toolbar>
        <div style={{ flex: '1 0 25px' }} />
        <Button
          color='primary'
          variant='contained'
          onClick={() => dispatch(actions.navigationEditNavigation({ view: 'contendersSelector' }))}
        >
          {translator.fromLabel('settingsSelector_close_button')}
        </Button>
      </div>
    </Modal>
  )
}

export default SettingsSelector
