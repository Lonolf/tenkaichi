import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import translator from 'utility/translator'

const useStyles = makeStyles(theme => ({
}))

const MatchTimer = ({ props: { intervals = [], status = 'ready' } = {} }) => {
  const classes = useStyles()
  const [totalTime, setTotalTime] = useState(0)

  useEffect(() => {
    const calcTotalTime = () => {
      const totalTime = intervals.reduce((totalTime, { start, stop }) =>
        totalTime + ((stop || (new Date()).getTime()) - start), 0)
      setTotalTime(totalTime)
    }

    calcTotalTime()

    const calculator = setInterval(() => {
      if (status === 'ongoing')
        calcTotalTime()
    }, 1000)
    return () => {
      clearInterval(calculator)
    }
  }, [intervals, status])

  const msToHMS = ms => {
    let seconds = Math.floor(ms / 1000)
    let hours = Math.floor(seconds / 3600)
    seconds = seconds % 3600
    const minutes = Math.floor(seconds / 60)
    seconds = seconds % 60
    return hours + ':' + minutes + ':' + seconds
  }

  return (
    <div className={classes.bottomContainer}>
      <Typography>
        {translator.fromLabel('matchTimer_' + status + '_label')}
      </Typography>
      <Typography>
        {status !== 'ready' ? translator.fromLabel('matchTimer_time_label') + msToHMS(totalTime) : null}
      </Typography>
    </div>
  )
}

export default MatchTimer
