import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Router} from 'react-router'

import App from './App'
import history from './utils/history'
import store from './store/store'
import './i18n'

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'))
