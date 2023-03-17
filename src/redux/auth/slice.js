import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser} from './operations';

const initialState = {
    // user: { name: null, email: null },
    user: { name: null, email: null, password: null, phone: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setNewUserAction(state,action) {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
        },
        setUserPhoneAction(state,action) {
            state.user.phone = action.payload;
        }
    },
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});

export const authReducer = authSlice.reducer;
export const {  
                setNewUserAction,
                setUserPhoneAction
            } = authSlice.actions