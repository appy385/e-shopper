import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { Theme, ThemeContext } from '../ThemeContext';

describe(Header.name, () => {
  const mockValue = 0;
  test('should match snapshot for theme light', () => {
    const { container } = render(

      <ThemeContext.Provider value={Theme.light}>
        <BrowserRouter>
          <Header value={mockValue} />
        </BrowserRouter>
      </ThemeContext.Provider>
      ,
    );
    expect(container).toMatchSnapshot();
  });
  test('should match snapshot for theme dark', () => {
    const { container } = render(
      <ThemeContext.Provider value={Theme.dark}>
        <BrowserRouter>
          <Header value={mockValue} />
        </BrowserRouter>
      </ThemeContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should go to new route when E-shopper link is clicked', () => {
    render(<BrowserRouter><Header value={mockValue} /></BrowserRouter>);
    const eshopperLink = screen.getByText('E-shopper');
    fireEvent.click(eshopperLink);
    expect(document.location.href).toBe('http://localhost/');
  });

  test('should go to new route when All Orders link is clicked ', () => {
    render(<BrowserRouter><Header value={mockValue} /></BrowserRouter>);
    const allOrdersLink = screen.getByText('All Orders');
    fireEvent.click(allOrdersLink);
    expect(document.location.href).toBe('http://localhost/order');
  });

  test('should go to new route when Cart link is clicked ', () => {
    render(<BrowserRouter><Header value={mockValue} /></BrowserRouter>);
    const cartLink = screen.getByText(`Basket Items: ${mockValue}`);
    fireEvent.click(cartLink);
    expect(document.location.href).toBe('http://localhost/cart');
  });
});
