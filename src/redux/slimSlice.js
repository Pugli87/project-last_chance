import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signUpUser, logOutUser, fetchFood } from "./thunks";

const initialState = {
    userInfo: {},
    token: localStorage.getItem('token') || '',
    food: [],
    isLoading: false,
    error: null,
};

export const slimSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        // loginUser
          .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.userInfo = action.payload.currentUser
            localStorage.setItem('token', action.payload.token);
            state.isLoading = false;
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
          })
          // signUpUser
          .addCase(signUpUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(signUpUser.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.userInfo = action.payload.currentUser
            localStorage.setItem('token', action.payload.token);
            state.isLoading = false;
          })
          .addCase(signUpUser.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
          })
          // logOutUser
          .addCase(logOutUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(logOutUser.fulfilled, (state, action) => {
            state.token = action.payload
            localStorage.setItem('token', action.payload);
            state.isLoading = false;
          })
          .addCase(logOutUser.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
          })
          // fetchFood
          .addCase(fetchFood.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(fetchFood.fulfilled, (state, action) => {
            state.food = action.payload;
            state.isLoading = false;
          })
          .addCase(fetchFood.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
          });
      },
});

// export const { } = slimSlice.actions;

export default slimSlice.reducer;
