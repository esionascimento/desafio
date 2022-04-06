import axios from 'axios';
import { User } from '../atoms/interface';

export const API = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'Content-type': 'application/json',
    },
});

export const APICreateClient = (state: any) => API.post('/client', state);
export const APIListAllClient = () => API.get('/client');

export const APICreateUser = (id: number, state: any) => API.post(`/user/${id}`, state);
export const APIListAllUser = () => API.get<User[]>('/user');
