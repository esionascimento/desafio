import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../atoms/interface';

const initialState: User = {
    email: '',
    first_name: 0,
    id_client: '',
    id_user: '',
    last_name: '',
    password: '',
    phone: '',
};

export const userSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setUser: (_state, { payload }) => payload,
        decrementClient: (_state) => initialState,
    },
});

export const { setUser, decrementClient } = userSlice.actions;

export default userSlice.reducer;
