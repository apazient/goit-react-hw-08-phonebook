import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { PrivateRoute } from 'HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'redux/Auth/operations';
import { selectIsLRefreshing } from 'redux/Auth/selectors';
import PublicRoute from 'HOC/PublicRoute';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const refreshing = useSelector(selectIsLRefreshing);

  return refreshing ? (
    <h1>Loaging...</h1>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}
