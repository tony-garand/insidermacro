import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="nav__container">
        <nav className="z-depth-0">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/consumer">Consumer</NavLink>
            <NavLink to="/equities">Equities</NavLink>
            <NavLink to="/manufacturing">Manufacturing</NavLink> 
            <NavLink to="/realestate">Real Estate</NavLink>
            <NavLink to="/currency">Currency</NavLink> 
        </nav>
      </div>
    );
  }
}

export default Navbar;
