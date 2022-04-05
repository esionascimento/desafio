import axios from 'axios';
import { User } from '../atoms/interface'

export const API = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    'Content-type': 'application/json'
  }
});

export const APIListAllUser = () => API.get<User[]>('/user')