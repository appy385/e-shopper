import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

import './HomePage.scss';

const HomePage = ({ products, onIncrement, onDecrement }) => (
  <div className="home">
    <div className="home-page">
      {
            Object.entries(products).map((categoryProducts) => (
              <div className="home-category" key={categoryProducts[0]}>
                <strong>{categoryProducts[0]}</strong>
                <div className="home-category-row">
                  { categoryProducts[1].map((product) => (
                    <Card
                      key={product.id}
                      product={product}
                      onIncrement={() => onIncrement(product.id, product.category)}
                      onDecrement={() => onDecrement(product.id, product.category)}
                    />
                  ))}
                </div>
              </div>
            ))
        }
    </div>
  </div>
);

HomePage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,

};

export default HomePage;
