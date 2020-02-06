import React from 'react';

const Navbar = props => {
  return (
    <div className={'navbar'}>
      <div className={'left'}>
        <div className={'item'}>Home</div>
      </div>
      <div className={'right'}>
        <div className={'item'} onClick={props.handleLogout}>Logout</div>
      </div>
    </div>
  )
}

export default Navbar
