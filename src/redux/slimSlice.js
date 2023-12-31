import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  signUpUser,
  logOutUser,
  fetchProducts,
  refreshToken,
  updateDate,
} from './thunks';

const initialState = {
  userInfo: {},
  currentUser: JSON.parse(localStorage.getItem('userCurrent')) || {},
  token: localStorage.getItem('token') || '',
  products: [],
  isLoading: false,
  error: null,
  date: new Date(),
};

export const slimSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    refreshToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
  },
  extraReducers: builder => {
    builder
      // loginUser
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userInfo = action.payload.userData;
        state.currentUser = action.payload.currentUser;
        localStorage.setItem('token', action.payload.token);
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // signUpUser
      .addCase(signUpUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userInfo = action.payload.currentUser;
        localStorage.setItem('token', action.payload.token);
        state.isLoading = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // logOutUser
      .addCase(logOutUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.token = action.payload;
        localStorage.setItem('token', action.payload);
        state.isLoading = false;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // fetchProducts
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // updateDate
      .addCase(updateDate.fulfilled, (state, action) => {
        state.date = action.payload;
      })
      .addCase(updateDate.rejected, (state, action) => {
        state.error = action.payload;
      })
      // refreshToken
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// export const { } = slimSlice.actions;

export default slimSlice.reducer;
