import React from 'react';
import './AllOrdersPage.css';

function AllOrdersPage() {
  return (
    <div>
      <p className="all-orders">All Orders</p>
      <hr />
      <p className="past-orders">Past Orders(10)</p>
      <div className="order-table-container">
        <table className="order-table">
          <tr>
            <th>Order</th>
            <th>Item</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
          <tr className="order-details">
            <td>order id: 12</td>
            <td>18 items</td>
            <td>Sun 04 March 2018 10:01 pm</td>
            <td>883.00</td>
          </tr>
          <tr className="order-item">
            <th>Item Description</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
          </tr>
          <tr className="cart-category">
            <td>Fruits and vegetables</td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr className="cart-product">
            <td>Banana-Robusta</td>
            <td>Rs: 80.00</td>
            <td>2</td>
            <td>80.00</td>
          </tr>
          <tr className="cart-product">
            <td>Apple</td>
            <td>Rs: 80.00</td>
            <td>2</td>
            <td>80.00</td>
          </tr>
          <tr className="cart-product">
            <td />
            <td> </td>
            <td><strong>Total</strong></td>
            <td>160.00</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AllOrdersPage;
