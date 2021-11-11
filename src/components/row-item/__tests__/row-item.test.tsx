import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import { RowItem } from '../index';
import { IProduct } from '../../../services/api/products';

describe('RowItem Component', () => {
  const mockProduct: IProduct = {
    id: 'mock_id',
    name: 'mock_name',
    image: 'mock_image',
    price: 10,
  };

  it('renders correctly', () => {
    const mockRemove = jest.fn();
    const component = render(
      <RowItem product={mockProduct} actionRemove={mockRemove} />,
    );
    expect(component).toBeTruthy();
  });

  it('should call the action actionRemove', () => {
    const mockRemove = jest.fn();
    const component = render(
      <RowItem product={mockProduct} actionRemove={mockRemove} />,
    );

    const button = component.getByTestId('row-item-button');

    expect(button).toBeTruthy();

    fireEvent.press(button);

    expect(mockRemove).toHaveBeenCalled();
    expect(mockRemove).toHaveBeenCalledWith(mockProduct);
  });

  it('should show the product name, image and price', async () => {
    const mockRemove = jest.fn();
    const { queryByTestId } = render(
      <RowItem product={mockProduct} actionRemove={mockRemove} />,
    );

    const productImage = queryByTestId('row-item-image');
    expect(productImage?.props['source']).toStrictEqual({ uri: 'mock_image' });

    const productName = queryByTestId('row-item-name');
    expect(productName?.children.toString()).toBe('mock_name');

    const productPrice = queryByTestId('row-item-price');
    expect(productPrice?.children.toString()).toBe('R$: 10,00');
  });
});
