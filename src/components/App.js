import React from 'react';

import Order from './Order';
import Inventory from './Inventory';
import Book from './Book';
import Header from './Header';

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

  //passed to <Inventory />
  removeBook = (key) => {
    const books = {...this.state.books};
    books[key] = null;
    this.setState({ books });
  }

  //passed to <Book />
  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});
  }

  //passed to <Inventory />
  removeFromOrder = (key) => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({ order });
  }

  render() {
    return (
      <div className="App container">
        <Header />
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
              removeFromOrder={this.removeFromOrder}
            />
          </div>
          <div className="col-md-4">
            <Inventory 
              addBook={this.addBook} 
              loadSamples={this.loadSamples} 
              books={this.state.books}
              removeBook={this.removeBook}
            />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;