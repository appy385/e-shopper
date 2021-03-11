import React from 'react';
import './BasketPage.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

function BasketPage({ basket }) {
  const cost = Object.entries(basket).reduce((currTotal, category) => (
    currTotal + category[1].reduce(
      (currCategoryTotal, product) => (currCategoryTotal + product.price * product.count),
      0,
    )
  ), 0);
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
          {
            Object.entries(basket).map((CategoryProducts) => (
              <>
                <tr className="cart-category">
                  <td>{CategoryProducts[0]}</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                {CategoryProducts[1].map((product) => (
                  <Item product={product} />
                ))}
              </>
            ))
          }

        </table>
      </div>
      <div className="cart-container">
        <Link to="/"><button type="button" className="cart-back-button">continue shopping</button></Link>
        <div className="cart-checkout">
          <p className="cart-amount">{`Total: ${cost}`}</p>
          <hr className="cart-line" />
          { (Object.keys(basket).length !== 0)
            ? <Link to="/checkout"><button type="button" className="checkout-button">checkout</button></Link>
            : <button type="button" className="checkout-button-disable">checkout</button>}
        </div>
      </div>

    </div>
  );
}

const productShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  src: PropTypes.string,
  count: PropTypes.number,
});
BasketPage.propTypes = {
  basket: PropTypes.objectOf(PropTypes.arrayOf(productShape)).isRequired,

};

export default BasketPage;
