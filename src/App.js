import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Home from "./home";
import About from "./about";
import Shop from "./shop";
import Single from "./single";
import GlobalState from "./context/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/shop/:itemId" component={Single} />
        </Switch>
      </Router>
    </GlobalState>
  );
};

export default App;
