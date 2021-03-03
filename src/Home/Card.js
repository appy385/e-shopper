import React from 'react';
import Prototype from 'prop-types';
import './Card.css';
import QuantityCounter from './QuantityCounter';

function Card(props) {
  const { product, onIncrement, onDecrement } = props;
  const {
    id, src, seller, productName, quantity, price, count,
  } = product;

  return (
    <div className="card">
      <img src={src} alt="product" />
      <div className="container">
        <h4><b>{seller}</b></h4>
        <p>{productName}</p>
        <p>{quantity}</p>
      </div>
      <div className="basket">
        <p>
          MRP:
          {' '}
          {price}
          {' '}
          /-
        </p>
        <QuantityCounter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>
    </div>
  );
}

Card.prototype = {
  src: Prototype.string.isRequired,
  seller: Prototype.string.isRequired,
  productName: Prototype.string.isRequired,
  quantity: Prototype.string.isRequired,
  price: Prototype.string.isRequired,
};

export default Card;
