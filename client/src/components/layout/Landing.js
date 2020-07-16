import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Landing extends Component {
  render() {
    
    const isLoggedIn = this.props.auth.isAuthenticated

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hello,</b> Stranger{" "}
              <div>MERN Stack Auth Starter</div>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              An User authentication setup with Passport and JWT
            </p>
            <br />
            <div>
            {isLoggedIn  
              ? <div>Welcome back </div> 
              : <div>
                  <div className="col s6">
                    <Link
                      to="/register"
                      style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                      }}
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                      Register
                    </Link>
                  </div>
                  <div className="col s6">
                    <Link
                      to="/login"
                      style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                      }}
                      className="btn btn-large btn-flat waves-effect white black-text"
                    >
                      Log In
                    </Link>
                  </div>
                </div>
              }
            </div> 

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
)(withRouter(Landing));
