import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { loggedUser, loggedIn } from "../../actions/eventActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LogoutUser extends Component {
  render() {
    const validUser = { id: "", name: "", email: "", password: "" };
    this.props.loggedUser(validUser);
    const login = false;
    this.props.loggedIn(login);

    return (
      <div>
        <Redirect to="/" />;
      </div>
    );
  }
}

LogoutUser.propTypes = {
  loggedUser: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired,
  loggedIn: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps, {
  loggedUser,
  loggedIn
})(LogoutUser);
