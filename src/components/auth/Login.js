import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/auth/authActions'
import { useHistory } from 'react-router'
import i18n from '../../i18n'

const Login = props => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [userData, setUserData] = useState({ email: '', password: '' })

  const onChange = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const isValid = () => userData.email.length
    && userData.password.length >= 8

  const handleLogin = e => {
    e.preventDefault()
    dispatch(logIn({ userData, navigateHome }))
  }

  const navigateHome = () => {
    history.push('/')
  }

  return (
    <form className={'content'}>
      <input
        type={'email'}
        className={'input'}
        onChange={onChange}
        name={'email'}
        placeholder={i18n.t('auth.placeholders.email')}
        value={userData.email}
      />
      <input
        className={'input'}
        onChange={onChange}
        name={'password'}
        placeholder={i18n.t('auth.placeholders.password')}
        type={'password'}
        value={userData.password}
      />
      <div className={'auth-error'}>{props.authError}</div>
      <input
        type={'submit'}
        value={i18n.t('auth.buttons.login')}
        className={'button centered '  + (!isValid() && 'disabled')}
        disabled={!isValid()}
        onClick={handleLogin}
        onSubmit={handleLogin}
      />
    </form>
  )
}

export default Login
