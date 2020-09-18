import React, { } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.sass';

let routes = (
  <Switch>
    {/* <Route exact path={["/", "/home"]} component={Home} />
    <Route exact path="/login" component={Hello2} /> */}
  </Switch>
)
function App() {
  return (
    <Router>
      {routes}
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>
            <a class="navbar-item">
              Search Book
            </a>
{/* 
            <Link to={"/Book"} className="nav-item">
                      Book
            </Link> */}
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  );
}

export default App;
