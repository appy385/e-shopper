import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ value }) {
  return (
    <div className="header">
      <Link to="/"><p className="header-tab eshopper">E-shopper</p></Link>
      <div className="header-right">
        <Link to="/order"><p className="header-tab orders">All Orders</p></Link>
        <Link to="/cart">
          <p className="header-tab items">{`Basket Items: ${value}`}</p>
        </Link>

      </div>
    </div>
  );
}

Header.propTypes = {
  value: PropTypes.number.isRequired,

};

export default Header;
