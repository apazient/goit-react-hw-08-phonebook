import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts, deleteContact } from 'redux/Contacts/operations';

import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/Contacts/selectors';
import { StyledLink } from '../SharedStyledComponent/sharedStyledComponent';
import { Item } from './contactListStyle';

const ContactList = () => {
  const loading = useSelector(selectIsLoading);
  const filteredData = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ol>
      {filteredData?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Item>
              {name}: {number}
              <StyledLink
                disabled={loading}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </StyledLink>
            </Item>
          </li>
        );
      })}
    </ol>
  );
};

export default ContactList;
