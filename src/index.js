import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './components/authentication/login.jsx';

import './index.css';

let Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/sign_in">Sign In Page</Link>
    </div>
  );
}

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          { /* keep it for navigation */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sign_in">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
