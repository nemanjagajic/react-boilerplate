import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { withNamespaces } from 'react-i18next'

import { logIn } from '../../store/auth/authActions'

const Login = ({ t }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [userData, setUserData] = useState({ username: '', password: '' })

  const onChange = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const isValid = () => userData.username.length
    && userData.password.length >= 8

  const handleLogin = () => {
    dispatch(logIn({ userData, navigateHome }))
  }

  const navigateHome = () => {
    history.push('/')
  }

  return (
    <div>
      <h2>{t('login')}</h2>
      <input
        onChange={onChange}
        name={'username'}
        placeholder={t('placeholders:username')}
        value={userData.username}
      />
      <input
        onChange={onChange}
        name={'password'}
        placeholder={t('placeholders:password')}
        type={'password'}
        value={userData.password}
      />
      <button disabled={!isValid()} onClick={handleLogin}>{t('buttons:login')}</button>
    </div>
  )
}

export default withNamespaces()(Login)
