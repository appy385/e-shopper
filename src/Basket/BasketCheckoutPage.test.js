import React from 'react';
import { render } from '@testing-library/react';
import BaksetCheckout from './BasketCheckoutPage';
import { mockAppBasket } from '../mockdata/app';

describe(BaksetCheckout.name, () => {
  let mockBasket;
  let mockAddOrder;
  beforeEach(() => {
    mockBasket = mockAppBasket;
    mockAddOrder = jest.fn();
  });
  test('shoudl match snapshot', () => {
    const { container } = render(<BaksetCheckout basket={mockBasket} addOrder={mockAddOrder} />);
    expect(container).toMatchSnapshot();
  });
});
