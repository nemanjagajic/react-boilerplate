import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/auth/authActions'
import { useHistory } from 'react-router'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [userData, setUserData] = useState({ username: '', password: '' })

  const onChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const isValid = () => userData.username.length
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
        className={'input'}
        onChange={onChange}
        name={'username'}
        placeholder={'Username'}
        value={userData.username}
      />
      <input
        className={'input'}
        onChange={onChange}
        name={'password'}
        placeholder={'Password'}
        type={'password'}
        value={userData.password}
      />
      <input
        type={'submit'}
        value={'Log in'}
        className={'button centered '  + (!isValid() && 'disabled')}
        disabled={!isValid()}
        onClick={handleLogin}
        onSubmit={handleLogin}
      />
    </form>
  )
}

export default Login
