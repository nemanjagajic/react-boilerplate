import React from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from './views/Home'
import Auth from './views/auth/Auth'

function App() {
  return (
    <div className='App'>
      <Route path='/auth' component={Auth} />
      <PrivateRoute exact path='/' component={Home} />
    </div>
  )
}

export default App
