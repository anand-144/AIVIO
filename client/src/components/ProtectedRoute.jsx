import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import LoginReminder from './LoginReminder';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AppContext);
  const isAuth = token || localStorage.getItem('token') || sessionStorage.getItem('token');

  return isAuth ? children : <LoginReminder />;
};

export default ProtectedRoute;
