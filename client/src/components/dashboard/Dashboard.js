import React, { Component } from "react";
import Header from "../layout/Header";
import PropTypes from "prop-types";
import Tabs from "./Tabs";
import FeedTabs from "../layout/FeedTabs";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>    
      <Header></Header>
        <div className="row content">
          <div className="col s7">
            <Tabs />
          </div>
          <div className="col s1"></div>
          <div className="col s4">
            <h3>Feed</h3>
            <FeedTabs />
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
