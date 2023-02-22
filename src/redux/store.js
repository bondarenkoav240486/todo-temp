import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/slice";
import { tasksReducer } from "./tasks/slice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        tasks: tasksReducer,
    },
});

export const persistor = persistStore(store);