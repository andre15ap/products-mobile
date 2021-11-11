import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';

import { HomeScreen } from '../index';
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
    price: 10,
  },
];

jest.mock('../../../services/api/products', () => ({
  getProducts: () => mockProducts,
}));

describe('HomeScreen', () => {
  it('renders correctly', async () => {
    const navigation = jest.fn();
    const route = jest.fn();

    const screen = await waitFor(() =>
      render(
        <HomeScreen navigation={navigation as any} route={route as any} />,
      ),
    );
    expect(screen).toBeTruthy();
  });

  it('renders correctly number of products', async () => {
    const navigation = jest.fn();
    const route = jest.fn();

    const screen = await waitFor(() =>
      render(
        <HomeScreen navigation={navigation as any} route={route as any} />,
      ),
    );
    const items = screen.queryAllByTestId('product-item-container');

    expect(items).toHaveLength(2);
  });

  it('should call the action navigation navigate', async () => {
    const mockNavigate = jest.fn();
    const navigation = {
      navigate: mockNavigate,
    };
    const route = jest.fn();

    const screen = await waitFor(() =>
      render(
        <HomeScreen navigation={navigation as any} route={route as any} />,
      ),
    );
    const button = screen.getByTestId('button-cart');

    fireEvent.press(button);

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('Cart');
  });
});
