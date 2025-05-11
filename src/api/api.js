import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6800f5c881c7e9fbcc41017b.mockapi.io',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

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

export const getAllProducts = () => api.get('/crud');

export const getCategories = async () => {
  const res = await api.get('/crud');
  const all = res.data;
  const unique = [...new Set(all.map((item) => item.category))];
  return unique;
};

export const getProductsByCategory = async (categoryName) => {
  const res = await api.get('/crud');
  const all = res.data;
  return all.filter((item) => item.category === categoryName);
};
