import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { stateIsLoggedIn } from '../redux/Auth/selectors';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(stateIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return children;
};
PublicRoute.propTypes = {
  children: PropTypes.node,
};
export default PublicRoute;
