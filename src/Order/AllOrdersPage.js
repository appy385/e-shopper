import React from 'react';
import './AllOrdersPage.css';
import Item from '../Item/Item';

function AllOrdersPage() {
  const orderProducts = [{
    id: 1,
    productName: 'Banana-Robusta',
    price: 80.00,
    count: 2,
  },
  {
    id: 2,
    productName: 'Apple',
    price: 100.00,
    count: 3,
  },
  {
    id: 3,
    productName: 'Mango',
    price: 60.00,
    count: 3,
  }];
  const total = orderProducts.reduce((acc, product) => (acc + product.price * product.count), 0);
  return (
    <div>
      <p className="all-orders">All Orders</p>
      <hr />
      <p className="past-orders">Past Orders(10)</p>
      <div className="order-table-container">
        <table className="order-table">
          <tr className="order-table-header">
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
        </table>
      </div>
      <div className="order-table-container">
        <table className="order-item-table">
          <tr className="order-item">
            <th>Item Description</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
          </tr>
          <tr className="order-category">
            <td>Fruits and vegetables</td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          {orderProducts.map((product) => (
            <Item product={product} />
          ))}
          <tr className="item">
            <td> </td>
            <td> </td>
            <td>Total:</td>
            <td>{total}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AllOrdersPage;
