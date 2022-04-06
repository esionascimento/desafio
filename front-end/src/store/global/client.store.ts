import { createSlice } from '@reduxjs/toolkit';
import { Client } from '../../atoms/interface';

const initialState: Client = {
    cnpj: 0,
    fantasy_name: '',
    social_reason: '',
    cep: 0,
    address: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    uf: '',
};

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClient: (_state, { payload }) => payload,
        decrementClient: (_state) => initialState,
    },
});

export const { setClient, decrementClient } = clientSlice.actions;

export default clientSlice.reducer;
