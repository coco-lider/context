// src/api.js
import axios from 'axios';

// Bitta joyda bazaviy URL
const BASE_URL = 'https://yourapi.mockapi.io'; // bu yerga real URL qo'yasiz

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
