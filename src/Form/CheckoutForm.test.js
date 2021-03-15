import React from 'react';
import {
  render, screen, fireEvent, act, waitFor,
} from '@testing-library/react';
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

  test('should go to home page on form submit', async () => {
    const { container } = render(
      <BrowserRouter>
        <CheckoutForm basket={mockBasket} addOrder={mockAddOrder} />
      </BrowserRouter>,
    );
    const firstNameInput = container.querySelector('#firstName');
    await waitFor(() => {
      fireEvent.change(firstNameInput, { target: { value: 'apoorva' } });
    });
    const submitButton = container.querySelector('button[type="submit"]');
    await waitFor(() => { fireEvent.click(submitButton); });
    expect(document.location.href).toBe('http://localhost/');
  });
});
