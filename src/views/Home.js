import React from 'react';
import { useDispatch } from 'react-redux'
import { logOut } from "../store/auth/authActions";

const Home = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <div>
      Home
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
