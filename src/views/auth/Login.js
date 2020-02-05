import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from "../../store/auth/authActions";
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

  const handleLogin = () => {
    dispatch(logIn({ userData, navigateHome }))
  }

  const navigateHome = () => {
    history.push('/')
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        onChange={onChange}
        name={'username'}
        placeholder={'Username'}
        value={userData.username}
      />
      <input
        onChange={onChange}
        name={'password'}
        placeholder={'Password'}
        type={'password'}
        value={userData.password}
      />
      <button disabled={!isValid()} onClick={handleLogin}>Log in</button>
    </div>
  )
}

export default Login
