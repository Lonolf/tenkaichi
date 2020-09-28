import React from 'react'
import { useOState } from 'overmind/index'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Modal from 'components/modal/Modal'

import translator from 'utility/translator'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}))

const ContenderDetails = ({ props: { name, onClose = () => {} } = {} }) => {
  const classes = useStyles()
  const state = useOState()
  const results = state.results[name]

  if (name == null || results == null)
    return null

  return (
    <Modal props={{ onClose }}>
      <div className={classes.container} onClick={onClose}>
        <Typography variant='h5'>{translator.fromLabel('contenderDetails_name_label') + results.name}</Typography>
        <Typography>{translator.fromLabel('contenderDetails_points_label') + results.points}</Typography>

        <Typography>{translator.fromLabel('contenderDetails_disparity_label') + results.disparity}</Typography>
        <Typography>{translator.fromLabel('contenderDetails_hitsScored_label') + results.hitsScored}</Typography>
        <Typography>{translator.fromLabel('contenderDetails_hitsSuffered_label') + results.hitsSuffered}</Typography>

        <Typography>{translator.fromLabel('contenderDetails_gamesWin_label') + results.gamesWin}</Typography>
        <Typography>{translator.fromLabel('contenderDetails_gamesLost_label') + results.gamesLost}</Typography>

        <Typography>{translator.fromLabel('contenderDetails_matchesWin_label') + results.matchesWin}</Typography>
        <Typography>{translator.fromLabel('contenderDetails_matchesLost_label') + results.matchesLost}</Typography>
      </div>
    </Modal>
  )
}

export default ContenderDetails
