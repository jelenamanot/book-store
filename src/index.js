import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components related imports
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

//Routing related imports
import { Switch, Route } from 'react-router';
import { Router } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>, document.getElementById('root')
);

export default history;