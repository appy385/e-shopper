import { checkPropTypes } from 'prop-types';
import React from 'react';

import './QuantityCounter.css'
function QuantityCounter({ count, onIncrement, onDecrement}) {
  return (
      <div className="quantity">
      <button  onClick={onIncrement}>+</button>
       <p className="count">{count} in Basket </p>
      <button onClick={onDecrement}>-</button> 
      </div>
  );
}


export default QuantityCounter;
