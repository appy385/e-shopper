import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

import './HomePage.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { products, onIncrement, onDecrement } = this.props;

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
          <div><strong>Fruits and Vegetables</strong></div>
          <div className="fruits-vegetables-row">
            {allProducts}
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,

};

export default HomePage;
