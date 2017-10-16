import React from 'react';

import Order from './Order';
import Inventory from './Inventory';
import Book from './Book';

import sampleBooks from '../sample-books';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      books: {},
      order: {}
    };
  }

  //passed to <Inventory />
  addBook = (book) => {
    const books = {...this.state.books};
    const timestamp = Date.now();
    books[`book-${timestamp}`] = book;
    this.setState({ books });
  }

  //passed to <Inventory />
  loadSamples = () => {
    this.setState({
      books: sampleBooks
    })
  }

  //passed to <Book />
  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});
  }

  render() {
    return (
      <div className="App container">

        <div className="row">
          <div className="col-md-4">
            <h2>Books</h2>
            <ul className="all-books-ul">
            {
              Object
                .keys(this.state.books)
                .map(key => 
                  <Book 
                    key={key}
                    index={key}
                    addToOrder={this.addToOrder} 
                    details={this.state.books[key]} 
                  />)
            }
            </ul>
          </div>
          <div className="col-md-4">
            <Order books={this.state.books} order={this.state.order} />
          </div>
          <div className="col-md-4">
            <Inventory addBook={this.addBook} loadSamples={this.loadSamples} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;