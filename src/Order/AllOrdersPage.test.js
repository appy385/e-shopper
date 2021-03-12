import React from 'react';
import { render, screen } from '@testing-library/react';
import AllOrdersPage from './AllOrdersPage';

describe(AllOrdersPage.name, () => {
  let mockOrders;
  beforeEach(() => {
    mockOrders = [
      {
        id: 1,
        iat: 134526668,
        length: 4,
        cost: 40,
        items: {
          'Fruits & Vegatables': [{
            id: 1,
            src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            seller: 'Fresho',
            name: 'Banana-Robusta',
            quantity: 10,
            price: 40,
            count: 0,
            category: 'Fruits & Vegatables',
          }],

        },
      },
      {
        id: 2,
        iat: 134526668,
        length: 4,
        cost: 40,
        items: {
          'Fruits & Vegatables': [{
            id: 1,
            src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            seller: 'Fresho',
            name: 'Banana-Robusta',
            quantity: 10,
            price: 40,
            count: 0,
            category: 'Fruits & Vegatables',
          }],

        },
      },
    ];
  });
  test('should match snapshot for AllOrdersPage component', () => {
    const { container } = render(<AllOrdersPage
      orders={mockOrders}
    />);
    expect(container).toMatchSnapshot();
  });
  test('should dispay number of orders', () => {
    render(<AllOrdersPage
      orders={mockOrders}
    />);
    screen.getByText(`Past Orders(${mockOrders.length})`);
  });
});
