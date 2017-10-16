import React from 'react';
import { formatPrice } from '../helpers';

import '../style/Book.css';

class Book extends React.Component {
  render() {
    const { details } = this.props;
    return(
      <li className="single-book-li">
        <h5>{details.name}</h5>
        <p className="price">{formatPrice(details.price)}</p>
        <div className="row">
          <div className="col-md-4">
            <img src={details.image} alt={details.name} />
          </div>
          <div className="col-md-8">
            <p>{details.desc}</p>
          </div>
        </div>
        <button className="btn btn-sm btn-success">Add To Order</button>
      </li>
    );
  }
}

export default Book;