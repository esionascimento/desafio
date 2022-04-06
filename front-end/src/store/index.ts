import { configureStore } from '@reduxjs/toolkit';
import Index from './global/global.store';
import Client from './global/client.store';
import User from './global/user.store';

export const store = configureStore({
    reducer: {
        clientStore: Client,
        userStore: User,
        globalStore: Index,
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
