import React from 'react';
import Card from './Card';

import './HomePage.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      products: [{
        id: 1,
        src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        seller: 'Fresho',
        productName: 'Banana-Robusta',
        quantity: '1kg',
        price: 40,
        count: 0,
      }, {
        id: 2,
        src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        seller: 'Fresho',
        productName: 'Banana-Robusta',
        quantity: '1kg',
        price: 40,
        count: 0,
      }],
    };
  }

  onIncrement(id) {
    this.setState((prevState) => ({
      ...prevState,
      cartCount: prevState.cartCount + 1,
      products: prevState.products.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      }),

    }));
  }

  onDecrement(id) {
    this.setState((prevState) => ({
      ...prevState,
      cartCount: (prevState.cartCount > 0) ? prevState.cartCount - 1 : prevState.cartCount,
      products: prevState.products.map((product) => ({
        ...product,
        count: (product.id === id && product.count > 0) ? product.count - 1 : product.count,
      })),
    }));
  }

  render() {
    console.log(this.state);
    const { products } = this.state;
    const allProducts = products.map((product) => (
      <Card
        key={product.id}
        product={product}
        onIncrement={() => this.onIncrement(product.id)}
        onDecrement={() => this.onDecrement(product.id)}
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

export default HomePage;
