import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const baseUrl = "http://localhost:3000/api/users";

const fecthCurrentUser = async (token) => {
    try {

        const response = await axios.get(`${baseUrl}/current`,  {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        }) 
        
        return response.data.result

    } catch (e) {

        return console.error('error:', e)

    }
}

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userInfo, thunkAPI) => {
        try {
            const { email, password } = userInfo 

            const data = {
                email,
                password
            };

            const response = await axios.post(`${baseUrl}/login`, data)

            const token = response.data.result.token

            const responseUser = await fecthCurrentUser(token)

            return  {
                token,
                currentUser: responseUser
            }

        } catch (e) {

            return thunkAPI.rejectWithValue(e.message)

        }
    }
)

export const signUpUser = createAsyncThunk(
    "auth/signUpUser",
    async (_, thunkAPI) => {
        try {

            // const data = {

            // };

            // const response = await axios.post(`${baseUrl}/signUp`, data)

            // return  response.json()

        } catch (e) {

            return thunkAPI.rejectWithValue(e.message)

        }
    }
)

export const logOutUser = createAsyncThunk(
    "auth/logOutUser",
    async (_, thunkAPI) => {
        try {

            const token = thunkAPI.getState().auth.token;

            console.log('get token', token)

            const response = await axios.post(`${baseUrl}/logout`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return response.data;

        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const fetchFood = createAsyncThunk(
    "auth/fetchFood",
    async (_, thunkAPI) => {
        try {

            // const response = await axios.get(`${baseUrl}/food`)

            // return  response.json()

        } catch (e) {

            return thunkAPI.rejectWithValue(e.message)

        }
    }
)