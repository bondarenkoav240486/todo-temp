import { createSlice } from "@reduxjs/toolkit";
import { getLists, addList, deleteList } from "./operations";
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

const listsSlice = createSlice({
    name: 'lists',
    initialState,
    extraReducers: {
        [getLists.pending]: handlePending,
        [addList.pending]: handlePending,
        [deleteList.pending]: handlePending,
        [getLists.rejected]: handleRejected,
        [addList.rejected]: handleRejected,
        [deleteList.rejected]: handleRejected,
        [getLists.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [addList.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [deleteList.fulfilled](state, action) {
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
    }
})

export const listsReducer = listsSlice.reducer;