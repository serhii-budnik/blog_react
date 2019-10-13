import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from '../models/user';
import Auth from '../auth/auth';

import { ThemeContext } from '../contexts/theme_context';

export default class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {user: ''};
  }

  static contextType = ThemeContext;

  async getCurrentUser() {
    let data = await User.getCurrentUser();
    let user = new User(data.data);
    return user;
  }

  componentDidMount(){
    this.getCurrentUser().then((user) => {
      this.setState({user: user});
    });
  }

  handleLogoutClick = () => {
    let auth = new Auth();
    auth.logout();
    this.props.history.push('/sign_in');
  }

  render() {
    return (
      <div>
        <h1>Home</h1>

        {this.state.user &&
        <div>
          <h2>{this.state.user.first_name}</h2>
          <img src={this.state.user.avatar} alt="avatar"/>
          <button
            onClick={this.handleLogoutClick}
            style={{
              backgroundColor: this.context.background,
              color: this.context.foreground
            }}
          >
            sign out
          </button>
        </div>
        }


        { !this.state.user && <Link to="/sign_in">Sign In Page</Link> }
      </div>
    );
  }
}
