import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Substitua pela URL da sua API
});

export const getExampleData = async () => {
  try {
    const response = await api.get('/example-endpoint');
    return response.data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};