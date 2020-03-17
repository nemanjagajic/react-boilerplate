import React, { useState } from 'react'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import i18n from '../i18n'
import GoogleLogin from 'react-google-login'
import {useDispatch, useSelector} from 'react-redux'
import {clearAuthError, logInWithGoogle} from '../store/auth/authActions'
import {useHistory} from 'react-router'

const Auth = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [selectedTab, setSelectedTab] = useState('login')

  const authError = useSelector(state => state.auth.authError)

  const navigateHome = () => {
    history.push('/')
  }

  const renderGoogleLoginButton = props => (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={'button-google'}
    >
      {i18n.t('auth.buttons.loginWithGoogle')}
    </button>
  )

  const handleGoogleLoginSuccess = response => {
    dispatch(logInWithGoogle({
      accessToken: response.tokenObj.access_token,
      navigateHome
    }))
  }

  const selectLoginTab = () => {
    if (authError) dispatch(clearAuthError())
    setSelectedTab('login')
  }

  const selectRegisterTab = () => {
    if (authError) dispatch(clearAuthError())
    setSelectedTab('register')
  }

  return (
    <div className={'auth-wrapper centered'}>
      <div className={'auth-form'}>
        <div className={'header'}>
          <div
            className={'login ' + (selectedTab === 'register' && 'inactive')}
            onClick={selectLoginTab}
          >
            {i18n.t('auth.login')}
          </div>
          <div
            className={'register ' + (selectedTab === 'login' && 'inactive')}
            onClick={selectRegisterTab}
          >
            {i18n.t('auth.register')}
          </div>
        </div>
        {selectedTab === 'login' ? (
          <Login authError={authError} />
        ) : (
          <Register authError={authError} />
        )}
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={renderGoogleLoginButton}
          onSuccess={handleGoogleLoginSuccess}
          onFailure={err => console.log(err)}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  )
}

export default Auth
