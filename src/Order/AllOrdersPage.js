/* eslint-disable react/prop-types */
import React from 'react';
import './AllOrdersPage.scss';
import Item from '../Item/Item';

const AllOrdersPage = ({ orders }) => (
  <div>
    <p className="all-orders">All Orders</p>
    <hr />
    <p className="past-orders">{`Past Orders(${orders.length})`}</p>
    <div className="order-table-container">
      {
          orders.map((order) => {
            const orderDate = new Date(order.date);
            return (
              <React.Fragment key={order.id}>
                <table className="order-table">
                  <thead>
                    <tr className="order-table-header">
                      <th>Order</th>
                      <th>Item</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="order-details">
                      <td>{`order id: ${order.id}`}</td>
                      <td>{order.total}</td>
                      <td>{(`${orderDate.getDate()}-${orderDate.getMonth()}-${orderDate.getFullYear()}`)}</td>
                      <td>{order.cost}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="order-item-container">
                  <table className="order-item-table">
                    <thead>
                      <tr className="order-item">
                        <th>Item Description</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                         Object.entries(order.items).map((CategoryItems) => (
                           <React.Fragment key={CategoryItems[0]}>
                             <tr className="order-category">
                               <td>{CategoryItems[0]}</td>
                               <td> </td>
                               <td> </td>
                               <td> </td>
                             </tr>

                             { CategoryItems[1].map((item) => (
                               <Item key={item.id} product={item} />
                             ))}
                           </React.Fragment>

                         ))
                      }

                      <tr className="order-item-total">
                        <td> </td>
                        <td> </td>
                        <td>Total:</td>
                        <td>{order.cost}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </React.Fragment>
            );
          })
       }
    </div>
  </div>
);
export default AllOrdersPage;
