import * as React from 'react'
import ReactDOM from 'react-dom'
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from './overmind'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const overmind = createOvermind(config)
export const history = createBrowserHistory()

ReactDOM.render((
  <React.StrictMode>
    <Provider value={overmind}>
      <Router history={history}>
        <Route component={App} />
      </Router>
    </Provider>
  </React.StrictMode>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
