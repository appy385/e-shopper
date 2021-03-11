import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
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
          <p className={`${headerTab} items`}>{`Basket Items: ${value}`}</p>
        </Link>

      </div>
    </div>
  );
};

Header.propTypes = {
  value: PropTypes.number.isRequired,

};

export default Header;
