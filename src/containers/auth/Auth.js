import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import i18n from '../../i18n'
import GoogleLogin from 'react-google-login'

const Auth = () => {
  const [selectedTab, setSelectedTab] = useState('login')

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
          onSuccess={resp => console.log(resp)}
          onFailure={() => console.log('FAILED')}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  )
}

export default Auth
