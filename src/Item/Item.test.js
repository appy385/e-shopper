import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';

describe(Item.name, () => {
  let mockProduct;
  beforeEach(() => {
    mockProduct = {
      id: 1,
      src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      seller: 'Fresho',
      name: 'Banana-Robusta',
      quantity: 10,
      price: 40,
      count: 2,
      category: 'Fruits & Vegatables',
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should match snapshot for Item component', () => {
    const { container } = render(<table>
      <tbody>
        <Item
          product={mockProduct}
        />
      </tbody>

    </table>);
    expect(container).toMatchSnapshot();
  });

  test('should display the product details', () => {
    render(<table>
      <tbody>
        <Item
          product={mockProduct}
        />
      </tbody>

    </table>);

    screen.getByText(mockProduct.name);
    screen.getByText(mockProduct.price);
    screen.getByText(mockProduct.count);
    screen.getByText(mockProduct.price * mockProduct.count);
  });
});
