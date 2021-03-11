/* eslint-disable react/prop-types */
import React from 'react';
import './BasketCheckout.scss';
import CheckoutForm from '../Form/CheckoutForm';

const BasketCheckout = ({ basket, addOrder }) => {
  const cartItems = { items: Object.values(basket).flat() };
  return (
    <div><CheckoutForm basket={cartItems} addOrder={addOrder} /></div>
    // <h1>Thank you for shopping with us</h1>
  );
};

export default BasketCheckout;
