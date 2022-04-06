import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    index: 0,
    keyCreate: true,
    headerCreate: '',
};

export const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        increment: (state) => {
            state.index += 1;
        },
        decrement: (state) => {
            state.index -= 1;
        },
        setKeyCreate: (state, { payload }) => {
            state.keyCreate = payload;
        },
        setHeader: (state, { payload }) => {
            state.headerCreate = payload;
        },
    },
});

export const {
    increment, decrement, setKeyCreate, setHeader,
} = indexSlice.actions;

export default indexSlice.reducer;
