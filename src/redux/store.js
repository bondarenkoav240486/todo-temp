import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/slice";
import { tasksReducer } from "./tasks/slice";
import { listsReducer } from "./lists/slice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        tasks: tasksReducer,
        lists: listsReducer,
    },
});

export const persistor = persistStore(store);