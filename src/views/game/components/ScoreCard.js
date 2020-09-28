import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useActions, useOState } from 'overmind/index'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import ThumbDown from '@material-ui/icons/ThumbDown'

const useStyles = makeStyles(theme => ({
  scoreContainer: {
    paddingTop: 30,
    width: '100%',
  },
  scoreLineContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
}))

const ScoreCard = ({ props, props: { contenders, game: { conA, conB } = {} } = {} }) => {
  const classes = useStyles()

  return (
    <div className={classes.scoreContainer}>
      <Divider />
      <ScoreLine props={{ ...props, scoreName: 'scoreConA', adversaryScoreName: 'scoreConB', contender: contenders[conA] }} />
      <Divider />
      <ScoreLine props={{ ...props, scoreName: 'scoreConB', adversaryScoreName: 'scoreConA', contender: contenders[conB] }} />
      <Divider />
    </div>
  )
}

const ScoreLine = ({ props: { gameId, matchId, match, contender, scoreName, adversaryScoreName } = {} } = {}) => {
  const actions = useActions()
  const classes = useStyles()
  useOState()

  const score = match[scoreName]

  return (
    <Toolbar className={classes.scoreLineContainer} disableGutters>
      <Button
        variant='outlined'
        onClick={() => actions.gamesEditMatch({ gameId, matchId, [scoreName]: score - 1 })}
        disabled={score < 1 || match.finished}
      >
        <Remove />
      </Button>
      {contender.name + ' - score: ' + score}
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        startIcon={<ThumbDown />}
        onClick={() => actions.gameAddAdmonition({ gameId, matchId, name: contender.name, adversaryScoreName })}
      >
        {contender.admonitions}
      </Button>
      <Button
        variant='outlined'
        onClick={() => actions.gamesEditMatch({ gameId, matchId, [scoreName]: score + 1 })}
        disabled={match.finished}
      >
        <Add />
      </Button>
    </Toolbar>
  )
}

export default ScoreCard
