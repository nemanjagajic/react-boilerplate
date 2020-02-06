import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from "../../store/auth/authActions";

const Register = () => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({ username: '', password: '' })

  const onChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const isValid = () => userData.username.length
    && userData.password.length >= 8

  const handleRegister = () => {
    dispatch(register(userData))
  }

  return (
    <div className={'content'}>
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
      <button className={'button'} disabled={!isValid()} onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register
