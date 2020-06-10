import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  const { login, userLogged } = props.login;
  const { name } = userLogged;

  return (
    <div>
      <nav
        className="navbar navbar-expand-sm
    navbar-dark bg-danger mb-3 py-0"
      >
        <div className="container">
          <a href="/" className="navbar-brand">
            Event Management
          </a>
          <a href="/" className="navbar-brand">
            {login ? `User: ${name}` : ""}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/event/add" className="nav-link">
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/event/delUpd" className="nav-link">
                  Update/Delete
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/user/login/" className="nav-link">
                  {login ? "" : "Login / Register"}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user/logout/" className="nav-link">
                  {login ? "Logout" : ""}
                </Link>
              </li>
            </ul>
          </div>{" "}
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  login: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps)(Header);
