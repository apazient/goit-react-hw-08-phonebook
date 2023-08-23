import React from 'react';
import { Formik } from 'formik';
import {
  Form,
  FormContainer,
  Title,
  Label,
  Input,
} from '../SharedStyledComponent/sharedStyledComponent';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <Title>Sign up to Contacts Book </Title>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <Label name="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="Enter your Name"
          />
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

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
