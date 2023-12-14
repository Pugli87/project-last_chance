import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/users';

const fecthCurrentUser = async token => {
  try {
    const response = await axios.get(`${baseUrl}/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.result;
  } catch (e) {
    return Notify.failure(e, {
      backOverlay: true, 
      fontSize: '16px', 
      fontFamily: 'Verdana', 
      cssAnimationStyle: 'from-right', 
      timeout: 800,
    });;
  }
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userInfo, thunkAPI) => {
    try {
      const { email, password } = userInfo;

            if ( !email || !password) {
                return thunkAPI.rejectWithValue('Los campos son requeridos');
            }

      const response = await axios.post(`${baseUrl}/login`, userInfo);

      const token = response.data.result.token;

      const responseUser = await fecthCurrentUser(token);

      return {
        token,
        currentUser: responseUser,
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
            }

      const response = await axios.post(`${baseUrl}/signUp`, userInfo);

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
  'auth/logOutUser',
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

export const fetchFood = createAsyncThunk(
  'auth/fetchFood',
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get(`${baseUrl}/food`)
      // return  response.json()
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
