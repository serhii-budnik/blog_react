import React from 'react';

function GuestGreating() {
  return (
    <div>Please, sign up here.</div>
  );
}

function UserGreating(props) {
  const username = props.username;
  console.log(username);
  return (
    <div>{username && `${username}, `}Welcome back!</div>
  );
}

function Greating(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreating />
  }

  return (<GuestGreating />);
}

function SignInButton(props) {
  return (
    <button onClick={props.onClick}>
      Sign in
    </button>
  );
}

function SignOutButton(props) {
  return (
    <button onClick={props.onClick}>
      Sign out
    </button>
  );
}

class AuthenticationControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState((prevState, props) => { return { isLoggedIn: true }; });
  }

  handleLogoutClick() {
    this.setState((prevState, props) => { return { isLoggedIn: false }; });
  }

  render() {
    const button = this.state.isLoggedIn ?
      <SignOutButton onClick={() => this.handleLogoutClick()} /> :
      <SignInButton onClick={() => this.handleLoginClick()} />

    return (
      <div>
        <div>
          <Greating isLoggedIn={this.state.isLoggedIn} />
        </div>
        {button}
      </div>
    );
  }
}