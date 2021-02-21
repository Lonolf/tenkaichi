import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { call, functions } from 'domains'
import Fab from '@material-ui/core/Fab'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Autocomplete from '@material-ui/lab/Autocomplete'

import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

import translator from 'utility/translator'
import { useLocalStorage } from 'react-use'

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    right: 25,
    bottom: 25,
    zIndex: 100,
  },
}))

const ContendersSelector = () => {
  const classes = useStyles()
  const [contenders, setContenders] = useLocalStorage('tenkaichi-contenders', [{ name: '' }])
  // const [contenders, setContenders] = useState([{ name: '' }])
  const [errors, setErrors] = useState({})
  const state = useSelector(state => state)
  let easterEggCounter = 0

  useEffect(() => {
    checkErrors()
  // eslint-disable-next-line
  }, [contenders])

  const easterEgg = () => {
    easterEggCounter++
    if (easterEggCounter > 4)
      call(functions.usersGetSwordAcademyUsers)
  }

  const filterOptions = () =>
    Object.values(state.users)
      .filter(user => !contenders.some(contender => contender.name === user.name))
      .sort((a, b) => a.name > b.name ? 1 : -1)

  const changeName = ({ name, index }) => {
    if (contenders[index].name !== name) {
      const newContenders = [...contenders]
      newContenders[index] = { ...contenders[index], name }

      if (newContenders[newContenders.length - 1].name !== '')
        newContenders.push({ name: '' })

      setContenders(newContenders)
    }
  }

  const deleteContender = ({ index, force = false }) => {
    if (force || (contenders[index].name === '')) {
      const newContenders = [...contenders]
      newContenders[index].name = ''
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
      <div style={{ height: 30 }} />
      <Typography onClick={easterEgg} variant='h4'>{translator.fromLabel('contendersSelector_title')}</Typography>
      {state.settings.swordAcademy ? <Typography variant='subtitle1'>{translator.fromLabel('contendersSelector_easterEgg_subtitle')}</Typography> : null}
      <div style={{ height: 15 }} />
      <List>
        <Divider />
        {contenders.map((contender, index) => (
          /* eslint-disable-next-line */
          <React.Fragment key={index}>
            <ListItem>
              <Autocomplete
                id={'contenderSelector' + index}
                options={filterOptions()}
                getOptionLabel={option => option.name ?? option}
                style={{ width: 300, color: 'white' }}
                value={contender}
                freeSolo
                autoSelect
                color='primary'
                onChange={(event, option) => {
                  if (option == null)
                    deleteContender({ index, force: true })
                  else
                    changeName({ name: option.name || option, index })
                }}
                selectOnFocus
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={(event, option) => {
                      changeName({ name: event.target.value, index })
                    }}
                    label={translator.fromLabel('contendersSelector_name_label')}
                    variant='filled'
                    value={contender.name}
                    error={errors[index] != null}
                    helperText={errors[index] || ''}
                    autoFocus={index === 0}
                  />
                )}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Fab
        className={classes.fab}
        color='primary'
        onClick={() => call(functions.tournamentCreateTournament, { contenders })}
        disabled={Object.values(errors).filter(error => error != null).length > 0 ||
          contenders.filter(({ name }) => name !== '').length < 2}
      >
        <KeyboardArrowRight />
      </Fab>
    </>
  )
}

export default ContendersSelector
