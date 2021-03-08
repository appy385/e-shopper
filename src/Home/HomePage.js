import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

import './HomePage.css';

const HomePage = ({ products, onIncrement, onDecrement }) => {
  const allProducts = products.map((product) => (
    <Card
      key={product.id}
      product={product}
      onIncrement={() => onIncrement(product.id)}
      onDecrement={() => onDecrement(product.id)}
    />
  ));
  return (
    <div className="home">
      <div className="home-page">
        <div className="home-category"><strong>Fruits and Vegetables</strong></div>
        <div className="fruits-vegetables-row">
          {allProducts}
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,

};

export default HomePage;
