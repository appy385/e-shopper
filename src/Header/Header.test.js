import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { Theme, ThemeContext } from '../ThemeContext';

describe(Header.name, () => {
  const mockValue = 0;
  test('should match snapshot for theme light', () => {
    const { container } = render(
      <ThemeContext.Provider value={Theme.light}>
        <Header value={mockValue} />
      </ThemeContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
  test('should match snapshot for theme dark', () => {
    const { container } = render(
      <ThemeContext.Provider value={Theme.dark}>
        <Header value={mockValue} />
      </ThemeContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should go to new route when E-shopper link is clicked', () => {
    render(<Header value={mockValue} />);
    const eshopperLink = screen.getByText('E-shopper');
    fireEvent.click(eshopperLink);
    expect(document.location.href).toBe('http://localhost/');
  });

  test('should go to new route when All Orders link is clicked ', () => {
    render(<Header value={mockValue} />);
    const allOrdersLink = screen.getByText('All Orders');
    fireEvent.click(allOrdersLink);
    expect(document.location.href).toBe('http://localhost/order');
  });

  test('should go to new route when Cart link is clicked ', () => {
    render(<Header value={mockValue} />);
    const cartLink = screen.getByText(`Basket Items: ${mockValue}`);
    fireEvent.click(cartLink);
    expect(document.location.href).toBe('http://localhost/cart');
  });
});
