import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Auth from '../../auth/auth';

export default class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {login: 's.budnik', password: '12345678'};
  }

  handleChangeEmail = (event) => {
    this.setState({login: event.target.value});
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    let auth = new Auth();
    auth.login(
      {login: this.state.login, password: this.state.password}
    ).then(() =>  this.props.history.push('/')).catch(
      (e) => alert(e.error)
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
            type="text"
            value={this.state.login}
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
