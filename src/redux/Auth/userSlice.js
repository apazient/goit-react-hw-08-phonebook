import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './operations';

const initialState = {
  user: {
    email: '',
    password: '',
    name: '',
  },
  isLoggenIn: false,
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
        state.isLoggenIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggenIn = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = { name: '', email: '' };
        state.token = '';
        state.isLoggenIn = false;
      });
    // .addCase(deleteContact.fulfilled, (state, action) => {
    //   state.contacts.items = state.contacts.items.filter(
    //     item => item.id !== action.payload
    //   );
    //   state.isLoading = false;
    // })
    // .addCase(deleteContact.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(addContact.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(addContact.fulfilled, (state, action) => {
    //   state.contacts.items.push(action.payload);
    //   state.isLoading = false;
    // });
  },
});

export const userReducer = userSlice.reducer;
