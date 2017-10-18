import React from 'react';
import '../style/Inventory.css';

import AddBookForm from './AddBookForm';

class Inventory extends React.Component {
  renderInventory = (key) => {
    const book = this.props.books[key];
    return(
      <div className="single-book-inventory row" key={key}>
        <div className="col-sm-10">
          <p>{book.name}</p>
          <p>by <em>{book.author}</em></p>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-sm btn-danger" onClick={() => this.props.removeBook(key)}>X</button> 
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Inventory">
        <h2>Inventory</h2>
        <div className="render-inventory">
          {Object.keys(this.props.books).map(this.renderInventory)}
        </div>
        <h2>Add New Book</h2>
        <AddBookForm addBook={this.props.addBook} />
        <div className="row">
          <div className="col-md-6 btn-load-wrap">
            <button onClick={this.props.loadSamples} className="btn btn-primary">load some books</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;