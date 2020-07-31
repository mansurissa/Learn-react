import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";
import Welcome from "./welcome";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class App extends Component {
  state = {
    logged: true,
  };
  render() {
    return (
      <>
        <Router>
          {/* <Switch> */}
          <Nav />
          <Redirect from="/" to="/login" />
          {this.state.logged && (
            <Redirect from="/login" to="/home" component={Login} />
          )}
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Home} />
          {!this.state.logged && <Route path="/login" component={Login} />}
          {/* </Switch> */}
        </Router>
      </>
    );
  }
}

export default App;
