import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useActions } from 'overmind/index'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'

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

const ScoreCard = ({ props: { state, gameId } = {} } = {}) => {
  const classes = useStyles()

  const game = state.games[gameId]

  return (
    <div className={classes.scoreContainer}>
      <Divider />
      <ScoreLine props={{ gameId, game, scoreName: 'scoreConA', score: game.scoreConA, contender: state.contenders[game.conA] }} />
      <Divider />
      <ScoreLine props={{ gameId, game, scoreName: 'scoreConB', score: game.scoreConB, contender: state.contenders[game.conB] }} />
      <Divider />
    </div>
  )
}

const ScoreLine = ({ props: { gameId, game, scoreName, score, contender } = {} } = {}) => {
  const actions = useActions()
  const classes = useStyles()

  return (
    <Toolbar className={classes.scoreLineContainer} disableGutters>
      <Button
        variant='outlined'
        onClick={() => actions.gamesEditGame({ gameId, [scoreName]: score - 1 })}
        disabled={score < 1 || game.finished}
      >
        <Remove />
      </Button>
      {contender.name + ' - score:' + score}
      <Button
        variant='outlined'
        onClick={() => actions.gamesEditGame({ gameId, [scoreName]: score + 1 })}
        disabled={game.finished}
      >
        <Add />
      </Button>
    </Toolbar>
  )
}

export default ScoreCard
