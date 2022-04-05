import { createSlice } from '@reduxjs/toolkit';
import { Client } from '../../atoms/interface'

const initialState: Client = {
    cnpj: 0,
    fantasy_name: "",
    social_reason: "",
    cep: 0,
    address: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    uf: ""
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