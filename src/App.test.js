import React from 'react';
import {
  fireEvent, render, screen, act, waitFor,
} from '@testing-library/react';
import { mockGetItems, mockGetOrders } from './mockdata/api';
// import api from './Utils/Api';
import App from './App';
import { getItems, getOrders } from './Utils/Api';

jest.mock('./Utils/Api');

describe(App.name, () => {
  beforeEach(() => {
    getItems.mockResolvedValue(mockGetItems.data);
    getOrders.mockResolvedValue(mockGetOrders.data);
  });
  afterEach(() => {
    jest.clearAllMocks();
    getOrders.mockClear();
    getItems.mockClear();
  });
  test('should match snapshot', async () => {
    const { container } = await waitFor(() => render(<App />));
    expect(container).toMatchSnapshot();
  });

  test('should display input checkbox field', async () => {
    await waitFor(() => render(<App />));
    const themeInput = screen.getByLabelText('Change Theme mode');
    expect(themeInput.tagName).toBe('INPUT');
  });

  test('should turn input checkbox field to true on click', async () => {
    await waitFor(() => render(<App />));
    const themeCheckbox = screen.getByLabelText('Change Theme mode');
    fireEvent.click(themeCheckbox);
    expect(themeCheckbox.checked).toEqual(true);
  });

  test('should render order page', async () => {
    await waitFor(() => render(<App />));
    const orderElement = screen.getByText('All Orders');
    act(() => { fireEvent.click(orderElement); });
    expect(document.location.href).toBe('http://localhost/order');
  });

  test('should render cart page', async () => {
    await waitFor(() => render(<App />));
    const cartElement = screen.getByText('Basket Items:');
    act(() => { fireEvent.click(cartElement); });
    expect(document.location.href).toBe('http://localhost/cart');
  });

  test('should increase count by 1 when + button is clicked', async () => {
    await waitFor(() => render(<App />));
    const homeElement = screen.getByText('E-shopper');
    act(() => { fireEvent.click(homeElement); });
    expect(document.location.href).toBe('http://localhost/');
    const incrementButton = screen.getAllByText('+');
    act(() => { fireEvent.click(incrementButton[0]); });
    screen.getByText('1');
  });

  it('should get orders data from backend', async () => {
    await waitFor(() => render(<App />));
    expect(getOrders).toHaveBeenCalledTimes(1);
  });

  it('should get items data from backend', async () => {
    await waitFor(() => render(<App />));
    expect(getItems).toHaveBeenCalledTimes(1);
  });
});
