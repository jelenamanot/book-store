import React from 'react';
import { formatPrice } from '../helpers';

import '../style/Book.css';

class Book extends React.Component {
  render() {
    const { details, index } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';

    return(
      <li className="single-book-li">
        <h5>{details.name}</h5>
        <p className="font-italic">by {details.author}</p>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <img src={details.image} alt={details.name} />
          </div>
          <div className="col-lg-8 col-md-12">
            <p>{details.desc}</p>
          </div>
        </div>
        <p className="price">Price: <span>{formatPrice(details.price)}</span></p>
        <button 
          onClick={() => this.props.addToOrder(index)}
          disabled={!isAvailable} 
          className="btn btn-sm btn-success"
        >
          {buttonText}
        </button>
      </li>
    );
  }
}

export default Book;