import React from 'react';
import '../style/App.css';

import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      books: {},
      order: {}
    };
  }

  addBook = (book) => {
    const books = {...this.state.books};
    const timestamp = Date.now();
    books[`book-${timestamp}`] = book;
    this.setState({ books });
  }

  render() {
    return (
      <div className="App container">

        <div className="row">
          <div className="col-md-4">
            <p>all</p>
          </div>
          <div className="col-md-3">
            <Order />
          </div>
          <div className="col-md-5">
            <Inventory addBook={this.addBook} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;