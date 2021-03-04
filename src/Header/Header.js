import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ value }) {
  return (
    <div className="header">
      <Link to="/"><p className="header-tab eshopper">E-shopper</p></Link>
      <div className="header-right">
        <Link to="/order"><p className="header-tab orders">All Orders</p></Link>
        <p className="header-tab items">
          Basket Items:
          {' '}
          {value}
        </p>

      </div>
    </div>
  );
}

export default Header;
