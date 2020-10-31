import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import ThumbDown from '@material-ui/icons/ThumbDown'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'

import translator from 'utility/translator'

const useStyles = makeStyles(theme => ({
  scoreContainer: {
    width: '100%',
  },
  scoreLineContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  nameContainer: {
    flex: '1 0 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    color: 'darkred',
  },
}))

const ScoreLine = ({
  props: {
    contender: { name = '', admonitions = 0 },
    score = 0,
    actionScore = 0,
    addAdmonition = () => {},
    addScore = () => {},
    removeScore = () => {},
    buttonsDisabled = false,
    actionsEnabled = true,
    scoreName,
  } = {},
} = {}) => {
  const classes = useStyles()
  return (
    <div className={classes.scoreContainer}>
      <Divider />
      <Toolbar className={classes.scoreLineContainer} disableGutters>
        <Button
          color='primary'
          variant='outlined'
          onClick={() => removeScore({ scoreName })}
          disabled={(actionsEnabled && actionScore < 1) || (!actionsEnabled && score < 1) || buttonsDisabled}
        >
          <Remove />
        </Button>
        <div className={classes.nameContainer}>
          <div><Typography>{name}</Typography></div>
          <div>
            <Typography>
              {translator.fromLabel('scoreline_score_label') + score}
              {actionScore > 0 ? ' +' + actionScore : ''}
            </Typography>
          </div>
        </div>
        <Button
          variant='outlined'
          className={classes.button}
          startIcon={<ThumbDown />}
          onClick={() => addAdmonition()}
        >
          {admonitions}
        </Button>
        <div style={{ width: 5 }} />
        <Button
          color='primary'
          variant='outlined'
          onClick={() => addScore({ scoreName })}
          disabled={buttonsDisabled}
        >
          <Add />
        </Button>
      </Toolbar>
      <Divider />
    </div>
  )
}

export default ScoreLine
