import axios from 'axios';
import config from '../configs';

export const httpClient = axios.create({
  baseURL: config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    APPID: config.API_KEY,
    units: 'metric'
  },
});
