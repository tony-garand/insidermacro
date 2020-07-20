import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../img/logo.png";
import Navbar from './Navbar'

export default class Header extends React.Component {
    render () {
        return (
          <header className="header">
              <div className="row">
                <div className="header__content">
                  <div className="top__header"> 
                      <Link className="header__logo" to="/">
                          <img src={logoImg} />
                      </Link>
                      <div className="header__search">
                        <input placeholder='&#xe8b6; Search' />
                      </div>
                      <div className="header__login">
                        <Link
                            to="/login"
                            style={{
                              width: "140px",
                              borderRadius: "3px",
                              letterSpacing: "1.5px"
                            }}
                            className="btn btn-large waves-effect waves-light green"
                        >
                          Login
                        </Link>
                      </div>
                  </div>
                  <Navbar />
                </div>
              </div>
          </header>
        )
    }
}
