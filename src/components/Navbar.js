import React from 'react'
import i18n from '../i18n'

const Navbar = props => {
  return (
    <div className={'navbar'}>
      <div className={'left'}>
        <div className={'item'}>{i18n.t('navbar.home')}</div>
      </div>
      <div className={'right'}>
        <div className={'item'} onClick={props.handleLogout}>{i18n.t('navbar.logout')}</div>
      </div>
    </div>
  )
}

export default Navbar
