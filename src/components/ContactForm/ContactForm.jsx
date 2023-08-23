import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/Contacts/operations';
import { isExistValue } from 'helpers/filter';
import { selectContacts } from 'redux/Contacts/selectors';
import {
  FormContainer,
  Form,
  Label,
  Input,
} from '../SharedStyledComponent/sharedStyledComponent';

export function ContactForm() {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Value not found');
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    isExistValue(name, items) && dispatch(addContact({ name, number }));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <FormContainer>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>

          <Input
            type="text"
            name="name"
            title="Please put some name"
            value={name}
            onChange={handleChange}
            required
          />
          <Label htmlFor="number">Number</Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </FormContainer>
  );
}

export default ContactForm;
