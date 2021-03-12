import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BaksetPage from './BasketPage';

describe(BaksetPage.name, () => {
  let mockBasket;
  beforeEach(() => {
    // document.local.href = 'http://localhost/cart';
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
      'Household Items': [{
        id: 2,
        src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        seller: 'Qwerty',
        name: 'table cloth',
        price: 40,
        count: 2,
        category: 'Household Items',
      }],

    };
  });
  afterEach(() => {
    document.close();
  });

  test('should match snapshot', () => {
    const { container } = render(<BrowserRouter><BaksetPage basket={mockBasket} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });

  test('should go back to home page', () => {
    render(<BrowserRouter><BaksetPage basket={mockBasket} /></BrowserRouter>);
    const homeLink = screen.getByText('continue shopping');
    fireEvent.click(homeLink);
    expect(document.location.href).toBe('http://localhost/');
  });

  test('should go back to checkout page when basket length>0 ', () => {
    render(<BrowserRouter><BaksetPage basket={mockBasket} /></BrowserRouter>);
    const checkoutLink = screen.getByText('checkout');
    fireEvent.click(checkoutLink);
    expect(document.location.href).toBe('http://localhost/checkout');
  });

  // test('should not go back to checkout page when basket length === 0 ', () => {
  //   render(<BrowserRouter><BaksetPage basket={{}} /></BrowserRouter>);
  //   const checkoutLink = screen.getByText('checkout');
  //   fireEvent.click(checkoutLink);
  //   expect(document.location.href).toBe('http://localhost/cart');
  // });
});
