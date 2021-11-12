import { IProduct } from '../services/api/products';

export function compare(prodA: IProduct, prodB: IProduct) {
  if (prodA.name.toLowerCase() < prodB.name.toLowerCase()) {
    return -1;
  }
  if (prodA.name.toLowerCase() > prodB.name.toLowerCase()) {
    return 1;
  }
  return 0;
}
