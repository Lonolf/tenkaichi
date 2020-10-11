import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useActions, useOState } from 'overmind/index'

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
}))

const ScoreLine = ({ props: { gameId, matchId, match, contender, scoreName, adversaryScoreName } = {} } = {}) => {
  const actions = useActions()
  const classes = useStyles()
  const state = useOState()

  const score = match[scoreName]

  return (
    <div className={classes.scoreContainer}>
      <Divider />
      <Toolbar className={classes.scoreLineContainer} disableGutters>
        {!state.settings.actionsButton
          ? (
            <Button
              variant='outlined'
              onClick={() => actions.matchesEditMatch({ gameId, matchId, [scoreName]: score - 1 })}
              disabled={score < 1 || match.status !== 'ongoing'}
            >
              <Remove />
            </Button>
          ) : null}
        <div className={classes.nameContainer}>
          <div><Typography>{contender.name}</Typography></div>
          <div><Typography>{translator.fromLabel('scoreline_score_label') + score}</Typography></div>
        </div>
        <Button
          variant='outlined'
          color='primary'
          className={classes.button}
          startIcon={<ThumbDown />}
          onClick={() => actions.gamesAddAdmonition({ gameId, matchId, name: contender.name, adversaryScoreName })}
        >
          {contender.admonitions}
        </Button>
        <div style={{ width: 5 }} />
        {!state.settings.actionsButton
          ? (
            <Button
              variant='outlined'
              onClick={() => actions.matchesEditMatch({ gameId, matchId, [scoreName]: score + 1 })}
              disabled={match.status !== 'ongoing'}
            >
              <Add />
            </Button>
          ) : null}
      </Toolbar>
      <Divider />
    </div>
  )
}

export default ScoreLine
