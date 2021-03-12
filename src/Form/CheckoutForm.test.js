import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { mockAppBasket } from '../mockdata/app';

describe(CheckoutForm.name, () => {
  let mockBasket;
  let mockAddOrder;
  beforeEach(() => {
    mockBasket = mockAppBasket;
    mockAddOrder = jest.fn();
  });
  test('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <CheckoutForm basket={mockBasket} addOrder={mockAddOrder} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
