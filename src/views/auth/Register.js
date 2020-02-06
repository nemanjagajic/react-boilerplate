import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { withNamespaces } from 'react-i18next'

import { register } from '../../store/auth/authActions'

const Register = ({ t }) => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({ username: '', password: '' })

  const onChange = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const isValid = () => userData.username.length
    && userData.password.length >= 8

  const handleRegister = () => {
    dispatch(register(userData))
  }

  return (
    <div>
      <h2>{t('register')}</h2>
      <input
        placeholder={t('placeholders:username')}
        name={'username'}
        value={userData.username}
        onChange={onChange}
      />
      <input
        placeholder={t('placeholders:password')}
        name={'password'}
        value={userData.password}
        type={'password'}
        onChange={onChange}
      />
      <button disabled={!isValid()} onClick={handleRegister}>{t('buttons:register')}</button>
    </div>
  )
}

export default withNamespaces()(Register)
