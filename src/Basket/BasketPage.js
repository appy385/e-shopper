import React from 'react';
import './BasketPage.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BasketPage({ basket }) {
  const cost = basket.reduce((acc, product) => (acc + product.price * product.count), 0);
  return (

    <div className="cart">
      <div className="cart-table-container">
        <table className="cart-table">
          <tr className="cart-table-header">
            <th>Item Description</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
          </tr>
          <tr className="cart-category">
            <td>Fruits and vegetables</td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          {basket.map((product) => (
            <tr className="cart-product">
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.count}</td>
              <td>{product.count * product.price}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="cart-container">
        <Link to="/"><button type="button" className="cart-back-button">continue shopping</button></Link>
        <div className="cart-checkout">
          <p className="cart-amount">
            Total:
            {' '}
            {cost}
          </p>
          <hr className="cart-line" />
          <Link to="/checkout"><button type="button" className="checkout-button">checkout</button></Link>
        </div>
      </div>

    </div>
  );
}

BasketPage.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default BasketPage;
