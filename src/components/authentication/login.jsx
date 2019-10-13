import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Auth from '../../auth/auth';

export default class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = { email: 'eve.holt@reqres.in', password: 'cityslicka'};
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    let auth = new Auth();
    auth.login(
      {email: this.state.email, password: this.state.password}
    ).then(() =>  window.location.href = '/').catch(
      (e) => console.log('Error: ', e)
    );
  }

  render() {
    return(
      <div>
        <div>
          <Link to="/">Go to Home page</Link>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
