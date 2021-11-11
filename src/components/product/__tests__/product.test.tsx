import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import { CartContext } from '../../../providers/cart';

import { Product } from '../index';
import { IProduct } from '../../../services/api/products';

describe('Product Component', () => {
  const mockProduct: IProduct = {
    id: 'mock_id',
    name: 'mock_name',
    image: 'mock_image',
    price: 10,
  };

  it('renders correctly', () => {
    const component = render(
      <CartContext.Provider
        value={{
          products: [],
          price: 0,
          addItem: jest.fn(),
          removeItem: jest.fn(),
          cleanCart: jest.fn(),
        }}>
        <Product product={mockProduct} />
      </CartContext.Provider>,
    );
    expect(component).toBeTruthy();
  });

  it('should call the action of useContext addItem', () => {
    const mockAdd = jest.fn();

    const component = render(
      <CartContext.Provider
        value={{
          products: [],
          price: 0,
          addItem: mockAdd,
          removeItem: jest.fn(),
          cleanCart: jest.fn(),
        }}>
        <Product product={mockProduct} />
      </CartContext.Provider>,
    );
    expect(component).toBeTruthy();
    const productButton = component.getByTestId('product-button');

    expect(productButton).toBeTruthy();

    const productButtonText = component.getByTestId('product-button-text');
    expect(productButtonText?.children.toString()).toBe('Adicionar');

    fireEvent.press(productButton);

    expect(mockAdd).toHaveBeenCalled();
    expect(mockAdd).toHaveBeenCalledWith(mockProduct);
  });

  it('should call the action of useContext removeItem', () => {
    const mockRemove = jest.fn();

    const component = render(
      <CartContext.Provider
        value={{
          products: [mockProduct],
          price: 0,
          addItem: jest.fn(),
          removeItem: mockRemove,
          cleanCart: jest.fn(),
        }}>
        <Product product={mockProduct} />
      </CartContext.Provider>,
    );
    expect(component).toBeTruthy();
    const productButton = component.getByTestId('product-button');

    expect(productButton).toBeTruthy();

    const productButtonText = component.getByTestId('product-button-text');
    expect(productButtonText?.children.toString()).toBe('Remover');

    fireEvent.press(productButton);

    expect(mockRemove).toHaveBeenCalled();
    expect(mockRemove).toHaveBeenCalledWith(mockProduct);
  });

  it('should show the product name, image and price', () => {
    const { queryByTestId } = render(
      <CartContext.Provider
        value={{
          products: [],
          price: 0,
          addItem: jest.fn(),
          removeItem: jest.fn(),
          cleanCart: jest.fn(),
        }}>
        <Product product={mockProduct} />
      </CartContext.Provider>,
    );

    const productImage = queryByTestId('product-image');
    expect(productImage?.props['source']).toStrictEqual({ uri: 'mock_image' });

    const productName = queryByTestId('product-name');
    expect(productName?.children.toString()).toBe('mock_name');

    const productPrice = queryByTestId('product-price');
    expect(productPrice?.children.toString()).toBe('R$: 10,00');
  });
});
