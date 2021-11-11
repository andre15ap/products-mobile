import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import { Header } from '../index';

describe('Header Component', () => {
  it('renders correctly', () => {
    const component = render(<Header />);
    expect(component).toBeTruthy();
  });

  it('should call the action actionClickCart', () => {
    const mockActionClickCart = jest.fn();

    const component = render(<Header actionClickCart={mockActionClickCart} />);
    const cartButton = component.getByTestId('button-cart');

    expect(cartButton).toBeTruthy();

    fireEvent.press(cartButton);

    expect(mockActionClickCart).toHaveBeenCalled();
  });

  it('should call the action actionBack', () => {
    const mockActionBack = jest.fn();

    const component = render(<Header actionBack={mockActionBack} />);
    const backButton = component.getByTestId('button-back');
    expect(backButton).toBeTruthy();
    fireEvent.press(backButton);
    expect(mockActionBack).toHaveBeenCalled();
  });

  it('should show the counter text', () => {
    const mockActionClickCart = jest.fn();
    const { queryByTestId } = render(
      <Header countItems={5} actionClickCart={mockActionClickCart} />,
    );
    const counter = queryByTestId('count-text');
    expect(counter).toBeTruthy();
    expect(counter?.children.toString()).toBe('5');
  });

  it('should not show the counter if you dont pass the action actionClickCart', () => {
    const { queryByTestId } = render(<Header countItems={5} />);
    expect(queryByTestId('count-text')).toBeNull();
  });
});
