import React, { useState } from 'react';
import Register from "./Register";
import Login from "./Login";

const Auth = () => {
  const [selectedTab, setSelectedTab] = useState('login');

  return (
    <div className={'auth-wrapper centered'}>
      <div className={'auth-form'}>
        <div className={'header'}>
          <div
            className={'login ' + (selectedTab === 'register' && 'inactive')}
            onClick={() => setSelectedTab('login')}
          >
            Login
          </div>
          <div
            className={'register ' + (selectedTab === 'login' && 'inactive')}
            onClick={() => setSelectedTab('register')}
          >
            Register
          </div>
        </div>
        {selectedTab === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default Auth;
