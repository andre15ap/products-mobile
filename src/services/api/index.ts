import axios from 'axios';

import { BASE_URL } from '../../config/service';
import { API_COUNT } from '../../config/service';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

const apiCount = axios.create({
  baseURL: API_COUNT.URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export { api, apiCount };
