import axios from 'axios';

// Determine API URL based on environment
const isDevelopment = import.meta.env.DEV;
const API_URL = isDevelopment 
  ? 'http://localhost:5000/api'
  : `${window.location.origin}/api`;

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to request headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth API calls
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
};

// Notes API calls
export const notesAPI = {
  createNote: (noteData) => api.post('/notes', noteData),
  getNotes: () => api.get('/notes'),
  updateNote: (id, noteData) => api.put(`/notes/${id}`, noteData),
  deleteNote: (id) => api.delete(`/notes/${id}`),
};

export default api;
