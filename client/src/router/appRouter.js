import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import store from "../store";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import PrivateRoute from "../components/private-route/PrivateRoute";
import Dashboard from "../components/dashboard/Dashboard";
import Home from '../components/pages/Home';
import Consumer from "../components/pages/Consumer";
import Currency from '../components/pages/Currency';
import Equities from "../components/pages/Equities";
import Manufacturing from '../components/pages/Manufacturing';
import RealEstate from "../components/pages/RealEstate";




// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class AppRouter extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/consumer" component={Consumer} />
            <Route exact path="/currency" component={Currency} />
            <Route exact path="/equities" component={Equities} />
            <Route exact path="/manufacturing" component={Manufacturing} />
            <Route exact path="/realestate" component={RealEstate} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
    );
  }
}
export default AppRouter;
