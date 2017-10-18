import React from 'react';
import '../style/AddBookForm.css';

class AddBookForm extends React.Component {

  createBook(event) {
    event.preventDefault();
    const book = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
      author: this.author.value
    }
    this.props.addBook(book);
    this.bookForm.reset();
  }

  render() {
    return (
      <div className="AddBookForm">
        <form 
          ref={(input) => this.bookForm = input}
          onSubmit={(e) => this.createBook(e)}
        >
          <div className="row">
            <input ref={(input) => this.name = input} type="text" placeholder="Book Name" className=" col-md-12 form-control"/>
          </div>
          <div className="row">
            <input ref={(input) => this.price = input} type="text" placeholder="Book Price" className=" col-md-6 form-control"/>
            <select ref={(input) => this.status = input} className="col-md-6">
              <option value="available">available!</option>
              <option value="unavailable">not available!</option>
            </select>
          </div>
          <div  className="row">
            <textarea ref={(input) => this.desc = input} type="text" placeholder="Book Desc" className="form-control"></textarea>
          </div>
          <div className="row">
            <input ref={(input) => this.image = input} type="text" placeholder="Book Image" className="form-control col-md-6" />
            <input ref={(input) => this.author = input} type="text" placeholder="Book Author" className="form-control col-md-6" />
          </div>
          <div className="row">
            <button type="submit" className="btn btn-secondary col-md-12">Add Item</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBookForm;