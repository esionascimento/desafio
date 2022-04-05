import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../atoms/interface'

const initialState: User = {
    email: "",
    first_name: 0,
    id_client: "",
    id_user: "",
    last_name: "",
    password: "",
    phone: ""
};

export const themeSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClient: (state, { payload }) => {
            state = payload;
        },
        decrementClient: (state) => {
            state = initialState;
        },
    },
});

export const { setClient, decrementClient } = themeSlice.actions;

export default themeSlice.reducer;