import * as React from 'react'
import ReactDOM from 'react-dom'
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from './overmind'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker'

import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { MuiThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const overmind = createOvermind(config, { hotReloading: true })
export const history = createBrowserHistory()

const theme = createMuiTheme({
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
    type: 'light',
    background: { default: '#c2b280', contrastText: '#8b0000', paper: '#c2b280' },
    primary: {
      main: '#8b0000',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(232, 232, 232)',
      dark: 'rgb(190, 190, 190)',
      contrastText: '#000',
    },
    error: {
      main: '#ba261a',
      contrastText: '#fff',
    },
    boxShadow: {
      main: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
      primary: 'rgba(255, 255, 255, 0.2)',
      secondary: 'rgba(255, 255, 255, 0.14)',
      tertiary: 'rgba(255, 255, 255, 0.12)',
    },
  },
})

ReactDOM.render((
  <React.StrictMode>
    <Provider value={overmind}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Router history={history}>
            <Route component={App} />
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
