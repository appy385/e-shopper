import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

function Item({ product }) {
  return (
    <tr className="cart-product">
      <td>{product.productName}</td>
      <td>{product.price}</td>
      <td>{product.count}</td>
      <td>{product.count * product.price}</td>
    </tr>
  );
}

Item.propTypes = {
  product: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    seller: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,

  })).isRequired,

};

export default Item;
