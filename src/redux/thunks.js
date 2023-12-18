import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://slim-mom-backend.up.railway.app/api/users';
const baseUrlproducts = 'https://slim-mom-backend.up.railway.app/api';

// const fecthCurrentUser = async token => {
//   try {
//     const response = await axios.get(`${baseUrl}/current`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data.result;
//   } catch (e) {
//     return Notify.failure(e, {
//       backOverlay: true,
//       fontSize: '16px',
//       fontFamily: 'Verdana',
//       cssAnimationStyle: 'from-right',
//       timeout: 800,
//     });
//   }
// };

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userInfo, thunkAPI) => {
    try {
      const { email, password } = userInfo;

      if (!email || !password) {
        return thunkAPI.rejectWithValue('Los campos son requeridos');
      }

      const response = await axios.post(`${baseUrl}/login`, userInfo);

      const token = response.data.token;

      console.log(response);

      // const responseUser = await fecthCurrentUser(token);

      return {
        token,
        currentUser: response.data.isUser,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (data, thunkAPI) => {
    try {
      console.log('data desed signUp', data);

      const { name, email, password } = data;

      if (!name || !email || !password) {
        return thunkAPI.rejectWithValue('Los campos son requeridos');
      }

      const userInfo = {
        email,
        password,
      };

      const response = await axios.post(`${baseUrl}/signUp`, data);

      if (response.status !== 201) {
        return thunkAPI.rejectWithValue('Error en SignUp');
      }

      const responseUserAction = await thunkAPI.dispatch(loginUser(userInfo));

      const responseUser = responseUserAction.payload;

      return responseUser;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      const response = await axios.post(`${baseUrl}/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'auth/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrlproducts}/products`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      const response = await axios.post(`${baseUrl}/refresh-token`, {
        token,
      });

      const newToken = response.data.token;

      return newToken;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
