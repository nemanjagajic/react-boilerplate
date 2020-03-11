import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import i18n from '../../i18n'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import {logInWithGoogle} from '../../store/auth/authActions'
import {useHistory} from 'react-router'

const Auth = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [selectedTab, setSelectedTab] = useState('login')

  const navigateHome = () => {
    history.push('/')
  }

  return (
    <div className={'auth-wrapper centered'}>
      <div className={'auth-form'}>
        <div className={'header'}>
          <div
            className={'login ' + (selectedTab === 'register' && 'inactive')}
            onClick={() => setSelectedTab('login')}
          >
            {i18n.t('auth.login')}
          </div>
          <div
            className={'register ' + (selectedTab === 'login' && 'inactive')}
            onClick={() => setSelectedTab('register')}
          >
            {i18n.t('auth.register')}
          </div>
        </div>
        {selectedTab === 'login' ? <Login /> : <Register />}
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
          )}
          onSuccess={res => dispatch(logInWithGoogle({
            accessToken: res.tokenObj.access_token,
            navigateHome
          }))}
          onFailure={err => console.log(err)}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  )
}

export default Auth
