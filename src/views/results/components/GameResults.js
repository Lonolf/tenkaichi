import React from 'react'

import { useOState } from 'overmind/index'

import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Toolbar from '@material-ui/core/Toolbar'

import translator from 'utility/translator'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}))

const GamesResults = () => {
  const classes = useStyles()
  const state = useOState()

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography variant='h5'>{translator.fromLabel('gamesResults_title')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List style={{ width: '100%' }}>
            <Divider />
            {Object.values(state.games)
              .sort((a, b) => a.gameId > b.gameId ? 1 : -1)
              .map(game => (
                <React.Fragment key={game.gameId}>
                  <ListItem>
                    <Toolbar disableGutters style={{ justifyContent: 'space-between', width: '100%' }}>
                      <Typography>{`Game: ${game.gameId}`}</Typography>
                      <Typography>{`${game.conA}: ${game.scoreConA}`}</Typography>
                      <Typography>{' - '}</Typography>
                      <Typography>{`${game.conB}: ${game.scoreConB}`}</Typography>
                    </Toolbar>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))
            }
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default GamesResults
