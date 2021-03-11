import React from 'react';
import PropTypes from 'prop-types';
import './Item.scss';

const Item = ({ product }) => (
  <tr className="item">
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.count}</td>
    <td data-testid="item-amount">{product.count * product.price}</td>
  </tr>
);

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string,
    seller: PropTypes.string,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.string,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,

};

export default Item;
