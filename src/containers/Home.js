import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logOut } from '../store/auth/authActions'
import Navbar from '../components/Navbar'
import i18n from '../i18n'

const Home = () => {
  const dispatch = useDispatch()
  const email = useSelector(state => state.auth.user.email)

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <div>
      <Navbar handleLogout={handleLogout}/>
      <div className={'content-wrapper'}>
        <div className={'welcome-text'}>{`${i18n.t('auth.loggedInAs')} `}
          <span className={'welcome-text-user'}>{email}</span>
        </div>
      </div>
    </div>
  )
}

export default Home
