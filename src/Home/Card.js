import React from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
  product: PropTypes.objectOf(PropTypes.object()).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,

};

export default Card;
