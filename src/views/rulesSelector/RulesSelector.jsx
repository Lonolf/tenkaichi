import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useActions, useOState } from 'overmind/index'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Modal from 'components/modal/Modal.jsx'

import translator from 'utility/translator'
import { NativeSelect } from '@material-ui/core'

import rulesets from 'assets/rulesets'

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

const RulesSelector = ({ props: { setOpen = () => {} } = {} }) => {
  const classes = useStyles()
  const actions = useActions()
  const state = useOState()

  const handleChange = values =>
    actions.rulesEditRules(values)

  const setRuleset = event =>
    actions.rulesSetRuleset({ rulesetId: event.target.value })

  const onClose = () => setOpen(false)

  return (
    <Modal props={{ onClose }}>
      <div className={classes.rulesContainer}>
        <Typography id='pointsToWin' variant='h4' gutterBottom>
          {translator.fromLabel('rulesSelector_title_label')}
        </Typography>
        <div style={{ flex: '0 0 25px' }} />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='ruleset-label'>{translator.fromLabel('rulesSelector_ruleset_label')}</InputLabel>
          <NativeSelect
            value={state.rules.rulesetId}
            onChange={setRuleset}
            inputProps={{
              name: 'ruleset',
              id: 'ruleset-selector',
            }}
          >
            <option aria-label='None' value='' />
            {Object.values(rulesets).map(ruleset => <option key={ruleset.rulesetId} value={ruleset.rulesetId}>{ruleset.label}</option>)}
          </NativeSelect>
        </FormControl>
        <div style={{ flex: '0 0 25px' }} />
        <FormControlLabel
          control={(
            <Checkbox
              color='primary'
              checked={state.rules.doubleDeath}
              onChange={() => handleChange({ doubleDeath: !state.rules.doubleDeath })}
              name='doubleDeath'
            />
          )}
          label={translator.fromLabel('rulesSelector_doubleDeath_label')}
        />
        <div style={{ flex: '0 0 25px' }} />
        <Typography id='matches' gutterBottom>
          {translator.fromLabel('rulesSelector_matches_label') + state.rules.matches}
        </Typography>
        <Slider
          value={state.rules.matches}
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
          {translator.fromLabel('rulesSelector_pointsToWin_label') + state.rules.pointsToWin}
        </Typography>
        <Slider
          value={state.rules.pointsToWin}
          aria-labelledby='pointsToWin'
          valueLabelDisplay='auto'
          marks
          min={1}
          max={15}
          onChange={(event, value) => handleChange({ pointsToWin: value })}
        />
        <div style={{ flex: '0 0 25px' }} />
        {/* This is disable to simplify the usability */}
        {/* <Typography id='pointsToWin' gutterBottom>
          {translator.fromLabel('rulesSelector_pointsForVictory_label') + state.rules.pointsForVictory}
        </Typography>
        <Slider
          value={state.rules.pointsForVictory}
          aria-labelledby='pointsToWin'
          valueLabelDisplay='auto'
          marks
          min={1}
          max={5}
          onChange={(event, value) => handleChange({ pointsForVictory: value })}
        />
        <div style={{ flex: '0 0 25px' }} /> */}
        <Typography id='pointsToWin' gutterBottom>
          {translator.fromLabel('rulesSelector_maxAdmonitions_label') + state.rules.maxAdmonitions}
        </Typography>
        <Slider
          value={state.rules.maxAdmonitions}
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
          onClick={() => actions.navigationChangeNavigation({ view: 'contendersSelector' })}
        >
          {translator.fromLabel('rulesSelector_close_button')}
        </Button>
      </div>
    </Modal>
  )
}

export default RulesSelector
