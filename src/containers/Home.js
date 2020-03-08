import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../store/auth/authActions'
import Navbar from '../components/Navbar'
import i18n from '../i18n'

const Home = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <div>
      <Navbar handleLogout={handleLogout}/>
      <div className={'content-wrapper'}>
        <div className={'title'}>{i18n.t('homePage')}</div>
      </div>
    </div>
  )
}

export default Home
