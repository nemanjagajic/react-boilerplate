import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import history from './utils/history'
import store from './store/store'
import './styles/index.scss'

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'))
