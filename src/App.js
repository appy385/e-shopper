import React from 'react';
import './App.css';
import HomePage from './Home/HomePage';
import Header from './Header/Header';
import Order from './Order/Order';
import BasketPage from './Basket/BasketPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      cartItems: [],
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
      },
      {
        id: 3,
        src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        seller: 'Fresho',
        productName: 'Banana-Robusta',
        quantity: '1kg',
        price: 40,
        count: 0,
      },
      {
        id: 4,
        src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        seller: 'Fresho',
        productName: 'Banana-Robusta',
        quantity: '1kg',
        price: 40,
        count: 0,
      }],
    };
  }

  onIncrement = (id) => {
    this.setState((prevState) => {

      let newState = {
        ...prevState,
        cartCount: prevState.cartCount + 1,
        products: prevState.products.map((product) => ( product.id === id ? {
          ...product,
           count: product.count + 1 
        }: product)),
      }

      newState = {
        ...newState,
        cartItems: newState.products.filter((product) => product.count>0),

      }
      return newState;
    });
  };

  onDecrement = (id) => {
    this.setState((prevState) => {

      let newState = {
        ...prevState,
        cartCount: (prevState.cartCount > 0) ? prevState.cartCount - 1 : prevState.cartCount,
        products: prevState.products.map((product) => ( product.id === id ? {
          ...product,
          count: (product.id === id && product.count > 0) ? product.count - 1 : product.count,
        }: product)),
      }

      newState = {
        ...newState,
        cartItems: newState.products.filter((product) => product.count>0),

      }
      return newState;
    });
  }

  render() {
    const { cartCount, cartItems,  products } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Header value={cartCount} />
          <Switch>
          <Route path="/order" exact> <Order/></Route>
          <Route path="/cart" exact> <BasketPage basket={cartItems}/></Route>
            <Route path="/"> <HomePage
              products={products}
              onIncrement={this.onIncrement}
              onDecrement={this.onDecrement}
            /></Route>
             
          </Switch>
        </div>
       </BrowserRouter>
    );
  }
}

export default App;
