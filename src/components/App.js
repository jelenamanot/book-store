import React from 'react';

import Order from './Order';
import Inventory from './Inventory';
import Book from './Book';

import sampleBooks from '../sample-books';
import base from '../base';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      books: {},
      order: {}
    };
  }

  componentWillMount() {
    // console.log(this.props.match.params.storeId)
    this.ref = base.syncState(`${this.props.match.params.storeId}/books`,
    {
      context: this,
      state: 'books'
    });

    //check if there are orders in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.match.params.storeId}`);
    
    if(localStorageRef) {
      //update our <App> order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  // localStorage order set up
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      `order-${this.props.match.params.storeId}`,
      JSON.stringify(nextState.order)
    );
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
            <Order 
              books={this.state.books} 
              order={this.state.order}
              params={this.props.match.params}
            />
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