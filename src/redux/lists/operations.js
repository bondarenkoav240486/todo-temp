import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getLists = createAsyncThunk(
    'lists/getLists',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/lists');
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const addList = createAsyncThunk(
    'lists/addList',
    async (listName, thunkAPI) => {
        try {
            const res = await axios.post('/lists', { listName });
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const deleteList = createAsyncThunk(
    'lists/deleteList',
    async (listId, thunkAPI) => {
        try {
            const res = await axios.delete(`/lists${listId}`);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);