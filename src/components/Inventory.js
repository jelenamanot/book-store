import React from 'react';
import '../style/Inventory.css';

import AddBookForm from './AddBookForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="Inventory container">
        <h2>Inventory</h2>
        <AddBookForm addBook={this.props.addBook} />
        <button onClick={this.props.loadSamples} className="btn btn-primary">Load Sample Books</button>
      </div>
    );
  }
}

export default Inventory;