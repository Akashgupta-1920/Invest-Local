import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5009/api', // 👈 Replace with your actual IP
  timeout: 10000,
});

export const signupUser = (data) => API.post('/auth/signup', data);
export const loginUser = (data) => API.post('/auth/login', data);

export default API;
