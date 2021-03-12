import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuantityCounter from './QuantityCounter';

describe(QuantityCounter.name, () => {
  let mockCount;
  let mockInc;
  let mockDec;
  beforeEach(() => {
    mockCount = 0;
    mockInc = jest.fn();
    mockDec = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should match snapshot for Card component', () => {
    const { container } = render(<QuantityCounter
      count={mockCount}
      onIncrement={mockInc}
      onDecrement={mockDec}
    />);
    expect(container).toMatchSnapshot();
  });
  test('should display + and - button', () => {
    render(<QuantityCounter
      count={mockCount}
      onIncrement={mockInc}
      onDecrement={mockDec}
    />);
    const incrementCount = screen.getByText('+');
    const decrementCount = screen.getByText('-');
    expect(incrementCount.tagName).toBe('BUTTON');
    expect(decrementCount.tagName).toBe('BUTTON');
  });
  test('should call mockInc func when + buttton is clicked', async () => {
    render(<QuantityCounter
      count={mockCount}
      onIncrement={mockInc}
      onDecrement={mockDec}
    />);
    const incrementCount = screen.getByText('+');
    fireEvent.click(incrementCount);
    expect(mockInc).toHaveBeenCalled();
  });
  test('should call mockDec func when - buttton is clicked', async () => {
    render(<QuantityCounter
      count={mockCount}
      onIncrement={mockInc}
      onDecrement={mockDec}
    />);
    const decrementCount = screen.getByText('-');
    fireEvent.click(decrementCount);
    expect(mockDec).toHaveBeenCalled();
  });
  test('should display count of product', async () => {
    render(<QuantityCounter
      count={mockCount}
      onIncrement={mockInc}
      onDecrement={mockDec}
    />);
    screen.getByText(`${mockCount} in Basket`);
  });
});
