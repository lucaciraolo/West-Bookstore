import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/BJSS.svg";

import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";
import RatingsPage from "./pages/RatingsPage";
import "./App.sass";
import { LoginPage } from "./pages/LoginPage";

let routes = (
  <Switch>
    <Route exact path={["/", "/home"]} component={HomePage} />
    <Route exact path={["/mylist"]} component={MyListPage} />
    <Route exact path={["/ratings"]} component={RatingsPage} />
    <Route exact path={["/login"]} component={LoginPage} />
  </Switch>
);
function App() {
  return (
    <Router>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <img
            className="navbar-item"
            alt="BJSS logo"
            src={logo}
            width="112"
            height="28"
          />
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/mylist">
              My List
            </Link>
            <Link className="navbar-item" to="/ratings">
              Global Ratings
            </Link>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link className="button is-light">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {routes}
    </Router>
  );
}

export default App;
