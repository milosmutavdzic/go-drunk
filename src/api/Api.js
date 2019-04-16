import axios from 'axios';

export const API = axios.create({
  baseURL: API_URL
});

export const MOCK_API = axios.create({
  baseURL: MOCK_API_URL
})