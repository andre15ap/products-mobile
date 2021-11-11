import React from 'react';

import { render } from '@testing-library/react-native';

jest.mock('react-native-vector-icons/MaterialIcons');

import { Loading } from '../index';

describe('Loading Component', () => {
  it('renders correctly', () => {
    const component = render(<Loading />);
    expect(component).toBeTruthy();
  });
});
