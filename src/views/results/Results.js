import React from 'react'

import { useState } from 'overmind/index'

import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'

import translator from 'utility/translator'

const ContendersSelector = () => {
  const state = useState()

  return (
    <>
      <Typography variant='h4'>{translator.fromLabel('results_title')}</Typography>
      <div style={{ height: 30 }} />
      <List>
        {Object.values(state.contenders)
          .sort((a, b) => state.results[a.name] > state.results[b.name] ? -1 : 1)
          .map(contender => {
            return (
              <Toolbar disableGutters>
                <Typography variant='h5'>{contender.name + ' - ' + state.results[contender.name]}</Typography>
              </Toolbar>
            )
          })}
      </List>
    </>
  )
}

export default ContendersSelector
