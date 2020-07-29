import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../img/logo.png";
import PropTypes from "prop-types";
import Navbar from './Navbar';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Header extends React.Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
    render () {
      const { user } = this.props.auth;
      const isLoggedIn = this.props.auth.isAuthenticated;

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
                      {isLoggedIn 
                        ? <button
                            style={{
                              width: "150px",
                              borderRadius: "3px",
                              letterSpacing: "1.5px",
                              marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                          >
                            Logout
                          </button>
                        : <Link
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
                      }
                      </div>
                  </div>
                  <Navbar />
                </div>
              </div>
          </header>
        )
    }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
