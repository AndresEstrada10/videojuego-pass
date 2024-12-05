import axios from 'axios';
// Obtener la URL de la API dependiendo del entorno
const apiUrl = process.env.NODE_ENV === 'development' 
  ? process.env.REACT_APP_API_URL  // Usar localhost en desarrollo
  : process.env.REACT_APP_API_URL_PROD;  // Usar URL de producción

const api = axios.create({
  baseURL: apiUrl,  // URL dinámica según el entorno
});

// Endpoints de videojuegos
export const getVideojuegos = () => api.get('/videojuegos');
export const getVideojuegoById = (id) => api.get(`/videojuegos/${id}`);

// Endpoints del carrito
export const getCarrito = () => api.get('/carrito');
export const addToCarrito = (videojuego) => api.post('/carrito/agregar', videojuego);
export const removeFromCarrito = (id) => api.delete(`/carrito/${id}`);

// Endpoints de registros (compras)
export const createRegistro = (data) => api.post('/registro', data); // Para crear un nuevo registro de compra

export default api;

