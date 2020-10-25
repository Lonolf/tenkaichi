import React from 'react'

import Snackbar from '@material-ui/core/Snackbar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import { useTheme } from '@material-ui/core/styles'

import { useOState, useActions } from 'overmind/index'

const ErrorBar = () => {
  const actions = useActions()
  const state = useOState()
  const error = Object.values(state.errors || {})[0]
  const theme = useTheme()

  const onClose = () => actions.deleteError({ errorId: error.errorId })

  if (error == null)
    return null
  else
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open
        autoHideDuration={5000}
        onClose={onClose}
        message={(
          <Toolbar style={{ minHeight: 0 }} disableGutters>
            <ErrorIcon style={{ marginRight: 15 }} />
            <span id='message-id'>
              {String(error.message)}
            </span>
          </Toolbar>
        )}
        ContentProps={{
          'aria-describedby': 'message-id',
          style: { backgroundColor: theme.palette.error.main },
        }}
        action={[
          <Button
            key='close'
            aria-label='Close'
            color='inherit'
            onClick={onClose}
          >
            <CloseIcon />
          </Button>,
        ]}
      />
    )
}

export default ErrorBar
