//  baseURL: 'https://connections-api.herokuAPI.com',

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  API.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  'auth/reg',
  async (credentials, thunkAPI) => {
    try {
      const res = await API.post('/users/signup', credentials);
      setToken(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await API.post('/users/login', credentials);
      setToken(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await API.post('/users/logout');
    clearToken();
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
//pul token from localstorege
export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().user.token;
  if (!savedToken) {
    return thunkAPI.rejectWithValue('Token is not exist');
  }
  try {
    setToken(savedToken);
    console.log(savedToken);
    const res = await API.get('/users/current');
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
