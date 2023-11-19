import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

/*
const token = localStorage.getItem('access_token');

api.interceptors.request.use(config => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
*/