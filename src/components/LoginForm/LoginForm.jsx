import React from 'react';
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/Auth/operations';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('Value not found');
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => navigate(location.state?.from || '/'));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <Title>Sign up to Contacts Book </Title>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <Label name="email">Email</Label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            placeholder="Enter your Email"
          />
          <Label name="password">Password</Label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            placeholder="Enter your password"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

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
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    al
}`;
export const Label = styled.label`
  display: inline-flex;
`;
