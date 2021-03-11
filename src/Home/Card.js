import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import QuantityCounter from './QuantityCounter';

const Card = (props) => {
  const { product, onIncrement, onDecrement } = props;
  const {
    id, src, seller, name, quantity, price, count, category,
  } = product;
  return (
    <div className="product-card">
      <img src={src} alt="product" />
      <div className="product-seller">{seller}</div>
      <div className="product-name">{name}</div>
      <div className="product-quantity">{`In stock: ${quantity}`}</div>
      <div className="product-card-box">
        <div className="product-price">{`MRP: ${price} /-`}</div>
        { (quantity !== 0)
          ? <QuantityCounter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
          : <p className="product-sold-out">Sold out</p>}
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    src: PropTypes.string.isRequired,
    seller: PropTypes.string,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    category: PropTypes.string,
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,

};

export default Card;
