import React from 'react';

import { getFunName } from '../helpers';

import '../style/StorePicker.css';

import history from '../index';

class StorePicker extends React.Component {

  goToStore(event) {
    event.preventDefault();
    const storeId = this.storeInput.value;
    history.replace(`/store/${storeId}`);
  }

  render() {
    return(
      <div className="container StorePicker">
        <div className="row">

          <div className="col-md-4">
            <h2>Please Enter a Store</h2>
            <small className="form-text text-muted">*name of the store is randomly picked</small>
          </div>

          <div className="col-md-8">
            <form onSubmit={(e) => this.goToStore(e)}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  required
                  placeholder="Store Name"
                  defaultValue={getFunName()}
                  ref={(input) => { this.storeInput = input }}
                />
                <button type="submit" className="btn btn-primary">Visit Store</button>
              </div>
            </form>
          </div>
          
       </div> {/*end row*/}
      </div>
    );
  }
}

export default StorePicker;