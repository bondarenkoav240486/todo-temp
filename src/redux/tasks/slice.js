import { createSlice } from "@reduxjs/toolkit";
import { getTasks, addTasks, deleteTask } from "./operations";
import { logOut } from "redux/auth/operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: {
        [getTasks.pending]: handlePending,
        [addTasks.pending]: handlePending,
        [deleteTask.pending]: handlePending,
        [getTasks.rejected]: handleRejected,
        [addTasks.rejected]: handleRejected,
        [deleteTask.rejected]: handleRejected,
        [getTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [addTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [deleteTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
        [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        },
    },
});

export const tasksReducer = tasksSlice.reducer;