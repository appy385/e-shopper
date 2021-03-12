import React from 'react';
import { render } from '@testing-library/react';
import BaksetCheckout from './BasketCheckoutPage';

describe(BaksetCheckout.name, () => {
  let mockBasket;
  let mockAddOrder;
  beforeEach(() => {
    mockBasket = {
      'Fruits & Vegatables': [{
        id: 1,
        src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        seller: 'Fresho',
        name: 'Banana-Robusta',
        price: 40,
        count: 2,
        category: 'Fruits & Vegatables',
      }],
    };
    mockAddOrder = jest.fn();
  });
  test('shoudl match snapshot', () => {
    const { container } = render(<BaksetCheckout basket={mockBasket} addOrder={mockAddOrder} />);
    expect(container).toMatchSnapshot();
  });
});
