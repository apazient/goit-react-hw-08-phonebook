import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavBar } from './NavBar';

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
const LayoutWrapper = styled.div`
  display: flex;
  widht: 100%;
`;
const WrapperOutlet = styled.div`
  padding: 20px;
  padding-top: 70px;
`;
