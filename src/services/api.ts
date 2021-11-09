export interface IProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
}

const MOCK_PRODUCTS = [
  {
    id: 'e0ed9856-1218-40ef-9322-6e220fbbb858',
    description: 'de laranja',
    name: 'bolo 1',
    price: 25.1,
    image:
      'https://bucket-image-products.s3.sa-east-1.amazonaws.com/7de084277be2d000c851-pokeball.png',
  },
  {
    id: 'e0ed9856-1218-40ef-9322-6e220fbbb859',
    description: 'de chocolate',
    name: 'bolo 2',
    price: 65.22,
    image:
      'https://bucket-image-products.s3.sa-east-1.amazonaws.com/7de084277be2d000c851-pokeball.png',
  },
  {
    id: 'e0ed9856-1218-40ef-9322-6e220fbbb860',
    description: 'de morango',
    name: 'bolo 3',
    price: 53.3,
    image:
      'https://bucket-image-products.s3.sa-east-1.amazonaws.com/7de084277be2d000c851-pokeball.png',
  },
];

export async function getProducts(): Promise<IProduct[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MOCK_PRODUCTS);
    }, 500);
  });
}
