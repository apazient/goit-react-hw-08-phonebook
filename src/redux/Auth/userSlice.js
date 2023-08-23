import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './operations';

const initialState = {
  user: {
    email: '',
    password: '',
    name: '',
  },
  isLoggedIn: false,
  isRefreshing: false,
  error: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = { name: '', email: '' };
        state.token = '';
        state.isLoggedIn = false;
      });
  },
});

export const userReducer = userSlice.reducer;
