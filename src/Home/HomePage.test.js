import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe(HomePage.name, () => {
  let mockProducts;
  let mockInc;
  let mockDec;
  beforeEach(() => {
    mockProducts = {
      'Fruits & Vegatables': [{
        id: 1,
        src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        seller: 'Fresho',
        name: 'Banana-Robusta',
        quantity: 10,
        price: 40,
        count: 0,
        category: 'Fruits & Vegatables',
      },
      {
        id: 2,
        src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        seller: 'Fresho',
        name: 'Banana-Organic',
        quantity: 10,
        price: 40,
        count: 0,
        category: 'Fruits & Vegatables',
      },
      ],
    };
    mockInc = jest.fn();
    mockDec = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot for Card component', () => {
    const { container } = render(<HomePage
      products={mockProducts}
      onIncrement={mockInc}
      onDecrement={mockDec}
    />);
    expect(container).toMatchSnapshot();
  });

  test('should display the product category "Fruits & Vegetables"', () => {
    render(<HomePage
      products={mockProducts}
      onIncrement={mockInc}
      onDecrement={mockDec}
    />);
    screen.getByText('Fruits & Vegatables');
  });

  test('should display the product details for id: 1', () => {
    render(<HomePage
      products={mockProducts}
      onIncrement={mockInc}
      onDecrement={mockDec}
    />);
    screen.getByText(mockProducts['Fruits & Vegatables'][0].name);
    screen.getAllByAltText('product');
    screen.getAllByText(mockProducts['Fruits & Vegatables'][0].seller);
    screen.getAllByText(`In stock: ${mockProducts['Fruits & Vegatables'][0].quantity}`);
    screen.getAllByText(`MRP: ${mockProducts['Fruits & Vegatables'][0].price} /-`);
  });
});
