import React from 'react'

import Typography from '@material-ui/core/Typography'

import translator from 'utility/translator'

import GameResults from './components/GameResults.jsx'
import ContendersList from './components/ContendersList.jsx'

const Results = () => {
  return (
    <>
      <Typography variant='h4'>{translator.fromLabel('results_title')}</Typography>
      <div style={{ height: 30 }} />
      <ContendersList />
      <div style={{ height: 30 }} />
      <GameResults />
      <div style={{ height: 50 }} />
    </>
  )
}

export default Results
