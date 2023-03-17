import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTasks = createAsyncThunk(
    'tasks/getTasks',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/tasks');
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const addTasks = createAsyncThunk(
    'tasks/addTask',
    async (text, thunkAPI) => {
        try {
            const res = await axios.post('/tasks', { text });
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (taskId, thunkAPI) => {
        try {
            const res = await axios.delete(`/tasks${taskId}`);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);