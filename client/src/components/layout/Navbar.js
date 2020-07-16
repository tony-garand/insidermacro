import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link to="/">Home</Link>
            <Link to="/consumer">Consumer</Link>
            <Link to="/equities">Equities</Link>
            <Link to="/manufacturing">Manufacturing</Link> 
            <Link to="/realestate">Real Estate</Link>
            <Link to="/currency">Currency</Link> 
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
