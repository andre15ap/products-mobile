import { api } from './index';

export interface IProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
}

export async function getProducts(): Promise<IProduct[]> {
  try {
    const response = await api.get('/products');
    const { data } = response;
    return data;
  } catch {
    return [];
  }
}
