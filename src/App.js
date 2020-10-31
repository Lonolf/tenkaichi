import React, { useEffect } from 'react'
import functions from 'redux/functions'
import ContentManager from 'views/contentManager/ContentManager'

import { useSelector } from 'react-redux'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const lightTheme = createMuiTheme({
  typography: {
    fontFamily: 'arial',
  },
  shapes: {
    borderRadius: 2,
  },
  values: {
    xAxisNumber: 18,
  },
  palette: {
    type: 'light',
    background: { default: '#fff', contrastText: '#000', paper: '#fff' },
    primary: {
      light: '#90ee90',
      main: '#74cc7c',
      contrastText: '#000',
    },
    secondary: {
      main: 'rgb(40, 40, 40)',
      dark: 'rgb(190, 190, 190)',
      contrastText: '#000',
    },
    error: {
      main: '#ba261a',
      contrastText: '#fff',
    },
  },
})

const darkTheme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        padding: 5,
      },
    },
  },
  typography: {
    fontFamily: 'arial',
  },
  shapes: {
    borderRadius: 2,
  },
  values: {
    xAxisNumber: 18,
  },
  palette: {
    type: 'dark',
    background: { default: '#252c33', contrastText: '#fff', paper: '#111417' },
    primary: {
      main: '#ff8800',
      contrastText: '#000',
    },
    secondary: {
      main: 'rgb(232, 232, 232)',
      dark: 'rgb(190, 190, 190)',
      contrastText: '#fff',
    },
    error: {
      main: '#ba261a',
      contrastText: '#fff',
    },
  },
})

const App = () => {
  const theme = useSelector(state => state.settings.theme)
  useEffect(() => functions.onStart(), [])
  return (
    <MuiThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <ContentManager />
    </MuiThemeProvider>
  )
}

export default App
