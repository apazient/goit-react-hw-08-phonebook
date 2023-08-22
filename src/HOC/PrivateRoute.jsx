import React from 'react';
import { useSelector } from 'react-redux';
import { stateIsLoggedIn } from '../redux/Auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggenIn = useSelector(stateIsLoggedIn);
  console.log(isLoggenIn);
  if (isLoggenIn) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};
