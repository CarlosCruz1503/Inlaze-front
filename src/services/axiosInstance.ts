import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
// Crear una instancia de Axios con configuraciones predeterminadas
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
