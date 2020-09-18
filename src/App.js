import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/BJSS.svg";

import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";
import RatingsPage from "./pages/RatingsPage";
import "./App.sass";
import { LoginPage } from "./pages/LoginPage";
import { firebaseProject } from "./firebase";
import { SearchPage } from "./pages/SearchPage";

export const UserContext = React.createContext(null);

let routes = (
  <Switch>
    <Route exact path={["/", "/home"]} component={HomePage} />
    <Route exact path={["/search"]} component={SearchPage} />
    {/* <Route exact path={["/ratings"]} component={RatingsPage} /> */}
    <Route exact path={["/login"]} component={LoginPage} />
    <Route exact path={["/search"]} component={SearchPage} />
  </Switch>
);
function App() {
  const [user, setUser] = useState(null);

  firebaseProject.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("user signed in");
      setUser(user);
    } else {
      console.log("user signed out");
      setUser(null);
    }
  });

  const handleSignout = () => {
    firebaseProject.auth().signOut();
  };

  return (
    <UserContext.Provider value={user}>
      <Router>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
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

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/search">
                Search
              </Link>
              <Link className="navbar-item" to="/ratings">
                Global Ratings
              </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  {user === null && (
                    <>
                      <Link className="button is-light" to="/login">
                        Log in
                      </Link>
                    </>
                  )}

                  {user !== null && (
                    <Link className="button is-primary" onClick={handleSignout}>
                      <strong>Sign out</strong>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
        {routes}
      </Router>
    </UserContext.Provider>
  );
}

export default App;
