import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';

describe(Item.name, ()=>{
    let mockProduct;
    beforeEach(() => {
        mockProduct = {
          id: 1,
          src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          seller: 'Fresho',
          productName: 'Banana-Robusta',
          quantity: '1kg',
          price: 40,
          count: 2,
          category: 'Fruits & Vegatables',
        };
     });
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('should match snapshot for Item component', () => {
        const { container } = render(<table><tbody><Item
          product={mockProduct}
        /></tbody></table>);
        expect(container).toMatchSnapshot();
    });

    test('should display the product details', () => {
        render(<table><tbody><Item
          product={mockProduct}
        /></tbody></table>);
        const amount = mockProduct.price *mockProduct.count
        screen.getByText(mockProduct.productName);
        screen.getByText(mockProduct.price);
        screen.getByText(mockProduct.count);
        const ele = screen.getByTestId("item-amount");
        // expect(ele.).toEqual();
      });
    
})