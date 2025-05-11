// src/api/api.js
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com', // bitta joydan boshqariladi
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Token avtomatik qo'shish
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Javob interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// ✅ API funksiyalari
export const getCategories = () => api.get('/products/categories');
export const getProductsByCategory = (categoryName) => api.get(`/products/category/${categoryName}`);
