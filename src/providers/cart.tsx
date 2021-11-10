import React, { createContext, useContext, useState } from 'react';
import { IProduct } from '../services/api';

// interface ICartItem {
//   product: IProduct;
//   amount: number;
// }

interface ICart {
  products?: IProduct[];
  price?: number;
  addItem?: (product: IProduct) => void;
  removeItem?: (product: IProduct) => void;
  cleanCart?: () => void;
}

const CartContext = createContext<ICart>({});

interface IProps {
  children: React.ReactNode;
}

export const CartProvider = (props: IProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [price, setPrice] = useState<number>(0);

  const addItem = async (product: IProduct) => {
    setProducts([...products, product]);
    setPrice(price + product.price);
  };

  const removeItem = async (product: IProduct) => {
    const newProducts = products.filter(item => item.id !== product.id);
    setProducts([...newProducts]);
    setPrice(price - product.price);
  };

  const cleanCart = async () => {
    setProducts([]);
    setPrice(0);
  };

  return (
    <CartContext.Provider
      value={{ products, price, addItem, removeItem, cleanCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
