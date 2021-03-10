import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import QuantityCounter from './QuantityCounter';

const Card = (props) => {
  const { product, onIncrement, onDecrement } = props;
  const {
    id, src, seller, name, quantity, price, count, category
  } = product;

  return (
    <div className="product-card">
      <img src={src} alt="product" />
      <div className="product-seller">{seller}</div>
      <div className="product-name">{name}</div>
      <div className="product-quantity">{quantity}</div>
      <div className="product-card-box">
        <div className="product-price">{`MRP: ${price} /-`}</div>
        <QuantityCounter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    seller: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,

};

export default Card;
