import React from 'react';
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/Auth/operations';
import {
  FormContainer,
  Title,
  Form,
  Label,
  Input,
} from '../SharedStyledComponent/sharedStyledComponent';
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
    console.log(location);
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <Title>Sign in to Contacts Book </Title>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <Label name="email">Email</Label>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            placeholder="Enter your Email"
          />
          <Label name="password">Password</Label>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            placeholder="Enter your password"
          />

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
