import React from 'react';
import '../style/Order.css';

import { formatPrice } from '../helpers';

class Order extends React.Component {

  renderOrder = (key) => {
    const book = this.props.books[key];
    const count = this.props.order[key];

    const removeButton = <button onClick={() => this.props.removeFromOrder(key)} className="remove-order-btn">&times;</button>

    if(!book || book.status === 'unavailable') {
      return <li key={key}>Sorry, { book ? book.name : 'book' } is not available {removeButton}</li>
    }

    return (
      <li key={key}>
        <h6>{book.name} {removeButton}</h6>
        <p>Quantity: {count}</p>
        <p>Price: {formatPrice(count * book.price)}</p>
        
      </li>
    );
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const book = this.props.books[key];
      const count = this.props.order[key];
      const isAvailable = book && book.status === 'available';

      if(isAvailable) {
        return prevTotal + (count * book.price || 0);
      }
      return prevTotal;
    }, 0)

    return (
      <div className="Order container">
        <h2>Your Order</h2>
        <ul className="all-orders-ul">
          {orderIds.map(this.renderOrder)}
          <li>Total: {formatPrice(total)}</li>
        </ul>
      </div>
    );
  }
}

export default Order;