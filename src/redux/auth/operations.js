// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from '../../http/index';

// URL TO DATABASE
// // Utility to add JWT
// const setAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// // Utility to remove JWT
// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
// };

export const register = createAsyncThunk(
    '/users/signup',
    async (credentials, thunkAPI) => {
        try {
            const res = await $host.post('/users/signup', credentials);
            // setAuthHeader(res.data.token);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await $host.post('/users/login', credentials);
            // setAuthHeader(res.data.token);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await $host.post('/users/logout');
            // clearAuthHeader();
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'users/current',
    async (_, thunkAPI) => {
        // const state = thunkAPI.getState();
        // const persistedToken = state.auth.token;

        // if (persistedToken === null) {
            // return thunkAPI.rejectWithValue('Unable to fetch user');
        // }

        try {
            // setAuthHeader(persistedToken);
            const { data } = await $host.get('/users/current');
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);