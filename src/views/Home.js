import React from 'react'
import { useDispatch } from 'react-redux'
import { withNamespaces } from 'react-i18next'

import { logOut } from '../store/auth/authActions'

const Home = ({ t }) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <div>
        {t('home')}
      <button onClick={handleLogout}>{t('buttons:logout')}</button>
    </div>
  )
}

export default withNamespaces()(Home)
