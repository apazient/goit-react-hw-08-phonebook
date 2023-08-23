import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper, WrapperOutlet } from './layoutStyle';
import { NavBar } from '../NavBar/NavBar';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>
    </LayoutWrapper>
  );
};
