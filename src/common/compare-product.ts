import { IProduct } from '../services/api/products';

export function compare(prodA: IProduct, prodB: IProduct) {
  if (prodA.name < prodB.name) {
    return -1;
  }
  if (prodA.name > prodB.name) {
    return 1;
  }
  return 0;
}
