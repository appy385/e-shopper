import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { mockAppProducts } from '../mockdata/app';

describe(HomePage.name, () => {
  let mockProducts;
  let mockInc;
  let mockDec;
  beforeEach(() => {
    mockProducts = mockAppProducts;
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

  test('should ', () => {
    render(<HomePage
      products={mockProducts}
      onIncrement={mockInc}
      onDecrement={mockDec}
    />);
    const element = screen.getAllByTestId('product-card');
    const length = Object.keys(mockProducts).reduce(
      (acc, category) => (acc + mockProducts[category].length), 0,
    );
    expect(element.length).toBe(length);
  });
});
