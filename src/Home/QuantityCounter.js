import PropTypes from 'prop-types';

import React from 'react';

import './QuantityCounter.css';

function QuantityCounter({ count, onIncrement, onDecrement }) {
  return (
    <div className="quantity">
      <button onClick={onIncrement}>+</button>
      <p className="count">
        {count}
        {' '}
        in Basket
        {' '}
      </p>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

QuantityCounter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,

};

export default QuantityCounter;
