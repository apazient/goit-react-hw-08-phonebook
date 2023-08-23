import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../Auth/operations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await API.get('/contacts');
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const res = await API.delete(`/contacts/${id}`);
      return res.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const res = await API.post(`/contacts`, body);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/update',
  async (body, thunkAPI) => {
    try {
      await API.patch(`/contacts/${body.id}`, body);
      thunkAPI.dispatch(fetchContacts());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
