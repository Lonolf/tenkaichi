import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useActions, useOState } from 'overmind/index'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Menu from '@material-ui/icons/Menu'

import Modal from 'components/modal/Modal.jsx'

import translator from 'utility/translator'

const useStyles = makeStyles((theme) => ({
  rulesContainer: {
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

const Container = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  if (!open)
    return (
      <Button
        color='primary'
        variant='outlined'
        className={classes.fab}
        onClick={() => setOpen(true)}
      >
        <Menu />
      </Button>
    )
  else
    return <RulesSelector props={{ setOpen }} />
}

const RulesSelector = ({ props: { setOpen = () => {} } = {} }) => {
  const classes = useStyles()
  const actions = useActions()
  const state = useOState()

  const handleChange = values =>
    actions.settingsEditRules(values)

  const onClose = () => setOpen(false)

  return (
    <Modal props={{ onClose }}>
      <div className={classes.rulesContainer}>
        <Typography id='pointsToWin' variant='h4' gutterBottom>
          {translator.fromLabel('rulesSelector_title_label')}
        </Typography>
        <FormControlLabel
          control={(
            <Checkbox
              color='primary'
              checked={state.settings.rules.doubleDeath}
              onChange={() => handleChange({ doubleDeath: !state.settings.rules.doubleDeath })}
              name='doubleDeath'
            />
          )}
          label={translator.fromLabel('rulesSelector_doubleDeath_label')}
        />
        <div style={{ flex: '0 0 25px' }} />
        <Typography id='matches' gutterBottom>
          {translator.fromLabel('rulesSelector_matches_label') + state.settings.rules.matches}
        </Typography>
        <Slider
          value={state.settings.rules.matches}
          aria-labelledby='matches'
          valueLabelDisplay='auto'
          marks
          min={1}
          max={7}
          step={2}
          onChange={(event, value) => handleChange({ matches: value })}
        />
        <div style={{ flex: '0 0 25px' }} />
        <Typography id='pointsToWin' gutterBottom>
          {translator.fromLabel('rulesSelector_pointsToWin_label') + state.settings.rules.pointsToWin}
        </Typography>
        <Slider
          value={state.settings.rules.pointsToWin}
          aria-labelledby='pointsToWin'
          valueLabelDisplay='auto'
          marks
          min={1}
          max={15}
          onChange={(event, value) => handleChange({ pointsToWin: value })}
        />
        <div style={{ flex: '0 0 25px' }} />
        <Typography id='pointsToWin' gutterBottom>
          {translator.fromLabel('rulesSelector_pointsForVictory_label') + state.settings.rules.pointsForVictory}
        </Typography>
        <Slider
          value={state.settings.rules.pointsForVictory}
          aria-labelledby='pointsToWin'
          valueLabelDisplay='auto'
          marks
          min={1}
          max={5}
          onChange={(event, value) => handleChange({ pointsForVictory: value })}
        />
        <div style={{ flex: '0 0 25px' }} />
        <Typography id='pointsToWin' gutterBottom>
          {translator.fromLabel('rulesSelector_maxAdmonitions_label') + state.settings.rules.maxAdmonitions}
        </Typography>
        <Slider
          value={state.settings.rules.maxAdmonitions}
          aria-labelledby='maxAdmonitions'
          valueLabelDisplay='auto'
          min={0}
          max={10}
          onChange={(event, value) => handleChange({ maxAdmonitions: value })}
        />
        <div style={{ flex: '1 1 10px' }} />
        <Button
          color='primary'
          variant='contained'
          onClick={onClose}
        >
          {translator.fromLabel('rulesSelector_close_button')}
        </Button>
      </div>
    </Modal>
  )
}

export default Container
