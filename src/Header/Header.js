import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import basket from '../assets/basket.png';
import './Header.scss';

const Header = ({ value }) => {
  const theme = useContext(ThemeContext);
  const headerTab = (theme === 'dark') ? 'header-tab-dark' : 'header-tab-light';
  return (
    <div className={(theme === 'dark') ? 'header-dark' : 'header-light'}>
      <Link to="/"><p className={`${headerTab} eshopper`}>E-shopper</p></Link>
      <div className="header-right">
        <Link to="/order"><p className={`${headerTab} orders`}>All Orders</p></Link>
        <Link to="/cart">
          <div className="header-basket-container">
            <img src={basket} alt="logo" className="header-basket-image" />

            <p className={`${headerTab} items`}>Basket Items:</p>
            <p className={`${headerTab} items`}>{`${value}`}</p>
          </div>
        </Link>

      </div>
    </div>
  );
};

Header.propTypes = {
  value: PropTypes.number.isRequired,

};

export default Header;
