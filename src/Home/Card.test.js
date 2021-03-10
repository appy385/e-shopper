import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe(Card.name, () => {
  let mockProduct;
  let mockInc;
  let mockDec;
  beforeEach(() => {
    mockProduct = {
      id: 1,
      src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      seller: 'Fresho',
      name: 'Banana-Robusta',
      quantity: '1kg',
      price: 40,
      count: 0,
      category: 'Fruits & Vegatables',
    };
    mockInc = jest.fn();
    mockDec = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should match snapshot for Card component', () => {
    const { container } = render(<Card
      product={mockProduct}
      onIncrement={mockInc}
      onDecrement={mockDec}
    />);
    expect(container).toMatchSnapshot();
  });
  test('should display the product details', () => {
    render(<Card
      product={mockProduct}
      onIncrement={mockInc}
      onDecrement={mockDec}
    />);
    screen.getByText(mockProduct.name);
    screen.getByAltText('product');
    screen.getByText(mockProduct.seller);
    screen.getByText(mockProduct.quantity);
    screen.getByText(`MRP: ${mockProduct.price} /-`);
  });
});
