import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { CartContext } from '../../../providers/cart';

import { CartScreen } from '../index';
import { IProduct } from '../../../services/api/products';

const mockProducts: IProduct[] = [
  {
    id: 'mock_id_01',
    name: 'mock_name_01',
    image: 'mock_image_01',
    price: 10,
  },
  {
    id: 'mock_id_02',
    name: 'mock_name_02',
    image: 'mock_image_02',
    price: 15,
  },
];

describe('CartScreen', () => {
  it('renders correctly', () => {
    const screen = render(
      <CartContext.Provider
        value={{
          products: mockProducts,
          price: 0,
          addItem: jest.fn(),
          removeItem: jest.fn(),
          cleanCart: jest.fn(),
        }}>
        <CartScreen navigation={jest.fn() as any} route={jest.fn() as any} />
      </CartContext.Provider>,
    );
    expect(screen).toBeTruthy();

    const title = screen.getByTestId('cart-label');

    expect(title?.children.toString()).toBe('2 produtos adicionados:');
  });

  it('should show the title in singular when only one item', () => {
    const screen = render(
      <CartContext.Provider
        value={{
          products: [mockProducts[0]],
          price: 10,
          addItem: jest.fn(),
          removeItem: jest.fn(),
          cleanCart: jest.fn(),
        }}>
        <CartScreen navigation={jest.fn() as any} route={jest.fn() as any} />
      </CartContext.Provider>,
    );

    const title = screen.getByTestId('cart-label');

    expect(title?.children.toString()).toBe('1 produto adicionado:');
  });

  it('renders correctly number of products lines', () => {
    const screen = render(
      <CartContext.Provider
        value={{
          products: mockProducts,
          price: 0,
          addItem: jest.fn(),
          removeItem: jest.fn(),
          cleanCart: jest.fn(),
        }}>
        <CartScreen navigation={jest.fn() as any} route={jest.fn() as any} />
      </CartContext.Provider>,
    );
    const items = screen.queryAllByTestId('row-item-container');

    expect(items).toHaveLength(2);
  });

  it('should renders correctly the total price', () => {
    const { getByTestId } = render(
      <CartContext.Provider
        value={{
          products: mockProducts,
          price: 25,
          addItem: jest.fn(),
          removeItem: jest.fn(),
          cleanCart: jest.fn(),
        }}>
        <CartScreen navigation={jest.fn() as any} route={jest.fn() as any} />
      </CartContext.Provider>,
    );
    const priceLabel = getByTestId('cart-price-total');

    expect(priceLabel?.children.toString()).toBe('Total R$: 25,00');
  });

  it('should call the action navigation navigate back', async () => {
    const mockGoback = jest.fn();

    const navigation = {
      goBack: mockGoback,
    };

    const screen = render(
      <CartContext.Provider
        value={{
          products: mockProducts,
          price: 0,
          addItem: jest.fn(),
          removeItem: jest.fn(),
          cleanCart: jest.fn(),
        }}>
        <CartScreen navigation={navigation as any} route={jest.fn() as any} />
      </CartContext.Provider>,
    );
    const button = screen.getByTestId('button-back');

    fireEvent.press(button);

    expect(mockGoback).toHaveBeenCalled();
  });

  it('should call the action clean cart and navigation navigate back', async () => {
    const mockGoback = jest.fn();
    const mockCleanCart = jest.fn();

    const navigation = {
      goBack: mockGoback,
    };

    const screen = render(
      <CartContext.Provider
        value={{
          products: mockProducts,
          price: 0,
          addItem: jest.fn(),
          removeItem: jest.fn(),
          cleanCart: mockCleanCart,
        }}>
        <CartScreen navigation={navigation as any} route={jest.fn() as any} />
      </CartContext.Provider>,
    );
    const button = screen.getByTestId('cart-button');

    fireEvent.press(button);

    expect(mockCleanCart).toHaveBeenCalled();
    expect(mockGoback).toHaveBeenCalled();
  });

  it('should disable the finish button if there are no items', async () => {
    const { queryByTestId } = render(
      <CartContext.Provider
        value={{
          products: [],
          price: 0,
          addItem: jest.fn(),
          removeItem: jest.fn(),
          cleanCart: jest.fn(),
        }}>
        <CartScreen navigation={jest.fn() as any} route={jest.fn() as any} />
      </CartContext.Provider>,
    );
    const button = queryByTestId('cart-button');

    expect(button?.props['accessibilityState']['disabled']).toBe(true);
  });
});
