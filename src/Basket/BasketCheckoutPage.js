/* eslint-disable react/prop-types */
import React from 'react';
import './BasketCheckoutPage.scss';
import CheckoutForm from '../Form/CheckoutForm';

const BasketCheckoutPage = ({ basket, addOrder }) => {
  const cartItems = { items: Object.values(basket).flat() };
  return (
    <div>
      <h1>Please Fill in Details!!</h1>
      <CheckoutForm basket={cartItems} addOrder={addOrder} />
    </div>

  );
};

export default BasketCheckoutPage;
