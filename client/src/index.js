import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/index.css';

import Dashboard from './routes/Dashboard';
import NotFound from './routes/NotFound';
import SignIn from './routes/SignIn';

const routing = (
  <Router>
    <Switch>
      <Route exact path = '/' component = {SignIn} />
      <Route exact path = '/dashboard' component = {Dashboard} />
      <Route path = '*' component = { NotFound } />  {/* For correct 404 rendering use attribute path = '*' */}
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
