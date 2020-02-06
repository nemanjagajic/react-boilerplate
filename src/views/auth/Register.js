import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from "../../store/auth/authActions";
import { useHistory } from 'react-router'

const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [userData, setUserData] = useState({ username: '', password: '' })

  const onChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const isValid = () => userData.username.length
    && userData.password.length >= 8

  const handleRegister = e => {
    e.preventDefault()
    dispatch(register({ userData, navigateHome }))
  }

  const navigateHome = () => {
    history.push('/')
  }

  return (
    <form className={'content'}>
      <input
        className={'input'}
        placeholder={'Username'}
        name={'username'}
        value={userData.username}
        onChange={onChange}
      />
      <input
        className={'input'}
        placeholder={'Password'}
        name={'password'}
        value={userData.password}
        type={'password'}
        onChange={onChange}
      />
      <input
        type={'submit'}
        value={'Register'}
        className={'button centered ' + (!isValid() && 'disabled')}
        disabled={!isValid()}
        onClick={handleRegister}
        onSubmit={handleRegister}
      />
    </form>
  )
}

export default Register
