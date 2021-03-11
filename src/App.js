import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeContext, Theme } from './ThemeContext';
import groupByCategory from './Utils/utils';
import HomePage from './Home/HomePage';
import Header from './Header/Header';
import AllOrdersPage from './Order/AllOrdersPage';
import BasketPage from './Basket/BasketPage';
import BasketCheckout from './Basket/BasketCheckout';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const productList = await axios.get('/items');
    const categoryProducts = groupByCategory(productList.data.data, 'products');
    setProducts(categoryProducts);
  }, []);

  useEffect(async () => {
    const orderList = await axios.get('/orders');
    const ordersData = orderList.data.data;
    const newOrders = ordersData.map((order) => ({
      ...order,
      total: order.items.length,
      cost: order.items.reduce((acc, item) => (acc + item.price * item.count), 0),
      items: groupByCategory(order.items, 'orders'),
    }));
    setOrders(newOrders);
  }, []);

  const onIncrement = (id, category) => {
    setCartCount(cartCount + 1);
    const newCategoryProducts = products[category].map((product) => ((product.id === id) ? {
      ...product,
      count: product.count + 1,
      quantity: product.quantity - 1,
    } : product));

    const newProducts = { ...products };
    newProducts[category] = newCategoryProducts;
    setProducts(newProducts);

    const newCartItems = { ...cartItems };
    newCartItems[category] = newProducts[category].filter((product) => product.count > 0);
    setCartItems(newCartItems);
  };

  const onDecrement = (id, category) => {
    const newCartCount = (cartCount > 0) ? cartCount - 1 : cartCount;
    setCartCount(newCartCount);
    const newCategoryProducts = products[category].map((product) => ((product.id === id) ? {
      ...product,
      count: (product.count > 0) ? product.count - 1 : product.count,
      quantity: product.quantity + 1,
    } : product));

    const newProducts = { ...products };
    newProducts[category] = newCategoryProducts;
    setProducts(newProducts);

    const newCartItems = { ...cartItems };
    newCartItems[category] = newProducts[category].filter((product) => product.count > 0);
    setCartItems(newCartItems);
  };

  const handleThemeChange = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <BrowserRouter>
      <div>
        <label htmlFor="theme-input">Change Theme mode</label>
        <input id="theme-input" type="checkbox" onClick={handleThemeChange} />

        <ThemeContext.Provider value={(theme === 'dark' ? Theme.dark : Theme.light)}>
          <Header value={cartCount} />
        </ThemeContext.Provider>

        <Switch>
          <Route path="/checkout" exact>
            <BasketCheckout />
          </Route>
          <Route path="/order" exact>
            <AllOrdersPage orders={orders} />
          </Route>
          <Route path="/cart" exact>
            <BasketPage basket={cartItems} />
          </Route>
          <Route path="/">
            <HomePage
              products={products}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
