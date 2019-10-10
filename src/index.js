import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './components/authentication/login.jsx';
import Home from './components/home.jsx';
import ToggleThemeButton from './components/toggle_theme_button.jsx';

import {ThemeContext, themes} from './contexts/theme_context';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {theme: themes.dark};
  }

  themeToggle() {
    this.setState((prevState) => {
      return ({
        theme: (themes.light == prevState.theme) ? themes.dark : themes.light
      });
    });
  }

  render(){
    return(
      <ThemeContext.Provider value={this.state.theme}>
        <Router>
          <div>
            { /* keep it for navigation */}
            <ToggleThemeButton onClick={() => this.themeToggle()} />

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
      </ThemeContext.Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
