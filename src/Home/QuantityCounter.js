import PropTypes from 'prop-types';

import React from 'react';

import './QuantityCounter.css';

function QuantityCounter({ count, onIncrement, onDecrement }) {
  return (
    <div className="quantity-container">
      <button type="button" className="quantity-inc-button" onClick={onIncrement}>+</button>
      <span className="quantity-basket-count">
        {`${count} in Basket`}
      </span>
      <button type="button" className="quantity-dec-button" onClick={onDecrement}>-</button>
    </div>
  );
}

QuantityCounter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,

};

export default QuantityCounter;
