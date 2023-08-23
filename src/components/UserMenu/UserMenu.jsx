import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/Auth/selectors';
import { logout } from 'redux/Auth/operations';
import {
  StyledLink,
  Info,
} from '../SharedStyledComponent/sharedStyledComponent';

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <>
      <Info>{name}</Info>
      <StyledLink onClick={() => dispatch(logout())}> Exit</StyledLink>
    </>
  );
};
