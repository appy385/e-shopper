import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeContext, Theme } from './ThemeContext';
import HomePage from './Home/HomePage';
import Header from './Header/Header';
import AllOrdersPage from './Order/AllOrdersPage';
import BasketPage from './Basket/BasketPage';
import BasketCheckout from './Basket/BasketCheckout';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([{
    id: 1,
    src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    seller: 'Fresho',
    productName: 'Banana-Robusta',
    quantity: '1kg',
    price: 40,
    count: 0,
  }, {
    id: 2,
    src: 'https://thumbs.dreamstime.com/b/mango-leaf-long-slices-isolated-white-background-fresh-cut-as-package-design-element-71454082.jpg',
    seller: 'Fresho',
    productName: 'Mango',
    quantity: '1kg',
    price: 50,
    count: 0,
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    seller: 'Fresho',
    productName: 'Apple',
    quantity: '1kg',
    price: 70,
    count: 0,
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    seller: 'Fresho',
    productName: 'Banana-Organic',
    quantity: '1kg',
    price: 40,
    count: 0,
  }]);

  const onIncrement = (id) => {
    setCartCount(cartCount + 1);

    const newProducts = products.map((product) => (product.id === id ? {
      ...product,
      count: product.count + 1,
    } : product));

    setProducts(newProducts);

    const newCartItems = newProducts.filter((product) => product.count > 0);
    setCartItems(newCartItems);
  };

  const onDecrement = (id) => {
    const newCartCount = (cartCount > 0) ? cartCount - 1 : cartCount;
    setCartCount(newCartCount);

    const newProducts = products.map((product) => (product.id === id ? {
      ...product,
      count: (product.count > 0) ? product.count - 1 : product.count,
    } : product));
    setProducts(newProducts);

    const newCartItems = newProducts.filter((product) => product.count > 0);
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
        <input type="checkbox" onClick={handleThemeChange} />
        <span>Change Theme mode</span>
        <ThemeContext.Provider value={(theme === 'dark' ? Theme.dark : Theme.light)}>
          <Header value={cartCount} />
        </ThemeContext.Provider>

        <Switch>
          <Route path="/checkout" exact>
            <BasketCheckout />
          </Route>
          <Route path="/order" exact>
            <AllOrdersPage />
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
