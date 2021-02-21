import React, { useState } from 'react'

import { dispatch, actions } from 'domains'
import { makeStyles } from '@material-ui/core/styles'

import Tutorial01 from 'assets/img/Tutorial01.png'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    width: '100%',
    height: '100%',
    maxWidth: 400,
    maxHeight: 600,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
}))

const Tutorial = () => {
  const classes = useStyles()
  const [page, setPage] = useState(0)

  const images = [
    Tutorial01,
  ]

  const navigate = () => {
    if (images[page + 1] != null)
      setPage(page + 1)
    else
      dispatch(actions.navigationEditNavigation, ({ view: 'contendersSelector' }))
  }

  return (
    <div className={classes.container}>
      <div
        className={classes.paper}
        style={{ backgroundImage: 'url(' + Tutorial01 + ')' }}
        onClick={navigate}
      />
    </div>
  )
}

export default Tutorial
