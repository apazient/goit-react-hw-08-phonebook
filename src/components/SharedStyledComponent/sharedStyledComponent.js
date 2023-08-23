import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 5px;
  border-radius: 6px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: #22c1c3;
    color: white;
  }
  &:hover:not(.active) {
    background-color: lightblue;
  }
`;

export const FormContainer = styled.div`
  max-width: 480px;
  min-width: 280px;
  margin: 0 auto;
  text-align: center;
`;
export const Title = styled.h2`
  margin: 0;
  padding: 20px 0px;
`;
export const Info = styled.h3`
  margin: 0;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;    
    
}`;
export const Label = styled.label`
  display: inline-flex;
  font-size: 12px;
`;
export const Input = styled.input`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
