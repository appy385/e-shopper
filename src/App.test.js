import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe(App.name, () => {
  test('should match snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('should display input checkbox field', () => {
    render(<App />);
    const themeInput = screen.getByLabelText('Change Theme mode');
    expect(themeInput.tagName).toBe('INPUT');
  });

  test('should turn input checkbox field to true on click', () => {
    render(<App />);
    const themeCheckbox = screen.getByLabelText('Change Theme mode');
    fireEvent.click(themeCheckbox);
    expect(themeCheckbox.checked).toEqual(true);
  });
});
