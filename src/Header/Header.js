import React from 'react';

import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="header">
        <p className="header-tab eshopper">E-shopper</p>
        <div className="header-right">
          <p className="header-tab orders">All Orders</p>
          <p className="header-tab items">
            Basket Items:
            {' '}
            {this.props.value}
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
