import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../img/logo.png";
import Navbar from './Navbar'

export default class Header extends React.Component {
    render () {
        return (
          <header className="header">
              <div className="content-container">
                <div className="header__content">
                  <div className="top__header"> 
                      <Link className="header__title" to="/">
                          <img src={logoImg} />
                      </Link>
                      <Link
                      to="/login"
                      style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                      }}
                      className="btn btn-large waves-effect waves-light blue accent-3"
                    >
                      Login
                    </Link>
                  </div>
                  <Navbar />
                </div>
              </div>
          </header>
        )
    }
}
