import React from 'react';
import '../style/App.css';

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

  render() {
    return (
      <div className="App container">

        <div className="row">
          <div className="col-md-4">
            <h1>Books</h1>
            <ul className="all-books-ul">
            {
              Object
                .keys(this.state.books)
                .map(key => <Book key={key} details={this.state.books[key]} />)
            }
            </ul>
          </div>
          <div className="col-md-3">
            <Order />
          </div>
          <div className="col-md-5">
            <Inventory addBook={this.addBook} loadSamples={this.loadSamples} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;