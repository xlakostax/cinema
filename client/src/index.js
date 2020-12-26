import React from 'react';
import ReactDOM from 'react-dom';

/*Import libraries*/
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/*Import providers and configs*/
import { AuthProvider } from "./components/AuthProvider";

/*Import styles*/
import './styles/index.css';

/*Import components*/
import Dashboard from './routes/Dashboard';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';

const routing = (
  <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path = '*' component = { NotFound } />  {/* For correct 404 rendering use attribute path = '*' */}
      </Switch>
    </Router>
  </AuthProvider>
);

ReactDOM.render(routing, document.getElementById('root'));
