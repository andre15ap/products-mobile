import React, { createContext, useContext, useState } from 'react';
import { IProduct } from '../services/api/products';

interface ICart {
  products?: IProduct[];
  price?: number;
  addItem?: (product: IProduct) => void;
  removeItem?: (product: IProduct) => void;
  cleanCart?: () => void;
}

export const CartContext = createContext<ICart>({});

interface IProps {
  children: React.ReactNode;
}

export const CartProvider = (props: IProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [price, setPrice] = useState<number>(0);

  const addItem = (product: IProduct) => {
    setProducts([...products, product]);
    setPrice(price + product.price);
  };

  const removeItem = (product: IProduct) => {
    const newProducts = products.filter(item => item.id !== product.id);
    if (!newProducts.length) {
      return cleanCart();
    }
    setProducts([...newProducts]);
    setPrice(price - product.price);
  };

  const cleanCart = () => {
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
