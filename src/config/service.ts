const DEVELOPMENT_URL = 'http://192.168.0.41:3000';
const PRODUCTION_URL = '';

const BASE_URL = __DEV__ ? DEVELOPMENT_URL : PRODUCTION_URL;

const API_COUNT = {
  URL: 'https://api.countapi.xyz/hit',
  NAMESPACE: 'product-app',
  KEY: 'app-key',
};

export { BASE_URL, API_COUNT };
