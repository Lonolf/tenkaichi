import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useActions } from 'overmind/index'

import Fab from '@material-ui/core/Fab'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

import translator from 'utility/translator'

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    right: 25,
    bottom: 25,
  },
}))

const ContendersSelector = () => {
  const classes = useStyles()
  const [contenders, setContenders] = useState([{ name: '' }])
  const [errors, setErrors] = useState({})
  const actions = useActions()

  useEffect(() => {
    checkErrors()
  // eslint-disable-next-line
  }, [contenders])

  const createContender = ({ index }) => {
    if (contenders.length - 1 === index)
      setContenders([...contenders, { name: '' }])
  }

  const changeName = ({ name, index }) => {
    const newContenders = [...contenders]
    newContenders[index] = { ...contenders[index], name }
    setContenders(newContenders)
  }

  const deleteContender = ({ index }) => {
    if (contenders[index].name === '' && index === contenders.length - 2) {
      const newContenders = [...contenders]
      newContenders.splice(newContenders.indexOf(index), 1)
      setContenders(newContenders)
    }
  }

  const checkErrors = () => {
    let newErrors = { ...errors }
    for (let i = 0; i < contenders.length; i++)
      if (contenders.some((con, index) => index !== i && contenders[i].name !== '' && con.name === contenders[i].name))
        newErrors[i] = 'Name already used'
      else
        newErrors[i] = null
    setErrors(newErrors)
  }

  return (
    <>
      <Typography variant='h4'>{translator.fromLabel('contendersSelector_title')}</Typography>
      <div style={{ height: 30 }} />
      <List>
        <Divider />
        {contenders.map((contender, index) => (
          <React.Fragment key={contender.contenderId}>
            <ListItem>
              <TextField
                placeholder={translator.fromLabel('contendersSelector_name_label')}
                onChange={event => changeName({ name: event.target.value, index })}
                value={contender.name}
                onFocus={() => createContender({ index })}
                onBlur={() => deleteContender({ index })}
                error={errors[index] != null}
                helperText={errors[index] || ''}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Fab
        className={classes.fab}
        color='primary'
        onClick={() => actions.contendersCreateContenders({ contenders })}
        disabled={Object.values(errors).filter(error => error != null).length > 0 ||
          contenders.filter(({ name }) => name !== '').length < 2}
      >
        <KeyboardArrowRight />
      </Fab>
    </>
  )
}

export default ContendersSelector
