import React from 'react';
import { NavItem, Nav } from './navBarStyle';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { stateIsLoggedIn } from '../../redux/Auth/selectors';
import { StyledLink } from '../SharedStyledComponent/sharedStyledComponent';

export const NavBar = () => {
  const isLoggedIn = useSelector(stateIsLoggedIn);
  return (
    <Nav>
      <NavItem>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </NavItem>
      {isLoggedIn ? (
        <NavItem>
          <UserMenu />
        </NavItem>
      ) : (
        <NavItem>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </NavItem>
      )}
    </Nav>
  );
};
