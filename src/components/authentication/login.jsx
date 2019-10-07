import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Auth from '../../Auth/Auth';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.domain = 'https://reqres.in'

    this.state = {email: 'eve.holt@reqres.in', password: 'cityslicka'};
  }

  handleChangeEmail(event){
    this.setState({email: event.target.value});
  }

  handleChangePassword(event){
    this.setState({password: event.target.value});
  }

  handleFormSubmit(event){
    event.preventDefault();

    let auth = new Auth();
    auth.login({email: this.state.email, password: this.state.password});
  }

  render() {
    return(
      <div>
        <div>
          <Link to="/">Go to Home page</Link>
        </div>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.handleChangeEmail(e)}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.handleChangePassword(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;

