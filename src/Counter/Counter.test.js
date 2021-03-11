import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import React from 'react';
import Counter from './Counter';

describe(Counter.name, () => {
  test('should match snapshot', () => {
    const { container } = render(<Counter />);
    expect(container).toMatchSnapshot();
  });

  test('should display current count', () => {
    render(<Counter />);
    screen.getByText('count: 0');
  });

  test('should display increment button', () => {
    render(<Counter />);
    const incrementElement = screen.getByText('Click');
    expect(incrementElement.tagName).toBe('BUTTON');
  });

  test('should update count to 1', async () => {
    render(<Counter />);
    const incrementElement = screen.getByText('Click');
    fireEvent.click(incrementElement);

    await waitFor(() => screen.getByText('count: 1'));
  });
});
