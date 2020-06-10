import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import {
  addUser,
  getUsers,
  loggedUser,
  loggedIn
} from "../../actions/eventActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LoginUser extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    errors: {},
    loginDesc: "Login",
    invalid: false,
    validUser: {}
  };
  componentDidMount() {
    this.props.getUsers();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = () => {
    this.setState({ loginDesc: "Login" });
    this.setState({
      id: "",
      name: "",
      email: "",
      password: "",
      errors: {}
    });
  };

  handleRegister = () => {
    this.setState({ loginDesc: "Register" });
    this.setState({
      id: "",
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      errors: {}
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { name, email, password, passwordConfirm, loginDesc } = this.state;

    if (email === "") {
      this.setState({ errors: { email: "Email must be input" } });
      return;
    }
    if (password === "") {
      this.setState({ errors: { password: "Password must be input" } });
      return;
    }
    if (loginDesc === "Register") {
      if (passwordConfirm === "") {
        this.setState({
          errors: { passwordConfirm: "PasswordConfirm must be input" }
        });
        return;
      }
      if (passwordConfirm !== password) {
        this.setState({
          errors: { passwordConfirm: "Password confirm must equal password" }
        });
        return;
      }
      if (name === "") {
        this.setState({ errors: { name: "Name must be input" } });
        return;
      }
    }
    if (loginDesc === "Login") {
      this.props.users.forEach(item => {
        if (item.email === email && item.password === password) {
          const id = item.id;
          const name = item.name;
          const validUser = { id, name, email, password };
          this.props.loggedUser(validUser);
          const login = true;
          this.props.loggedIn(login);
          this.props.history.push("/event/delUpd");
        }
      });

      this.setState({ errors: { email: "email or password Invalid" } });
      return;
    } else {
      this.setState({ errors: {} });
      this.props.users.forEach(item => {
        if (email === item.email) {
          this.setState({ errors: { email: "Email already taken" } });
          this.setState({ invalid: true });
        }
      });

      if (this.state.invalid) {
        return;
      }
    }

    const newUser = {
      name,
      email,
      password
    };

    this.props.addUser(newUser);
    const validUser = { name, email, password };
    this.props.loggedUser(validUser);
    const login = true;
    this.props.loggedIn(login);

    this.setState({
      id: "",
      name: "",
      email: "",
      password: "",
      errors: {}
    });

    this.props.history.push("/event/delUpd");
  };

  render() {
    const {
      name,
      email,
      password,
      passwordConfirm,
      loginDesc,
      errors
    } = this.state;
    return (
      <div>
        <div>
          <input
            type="button"
            value="Login"
            className="btn btn-light"
            onClick={this.handleLogin.bind(this)}
          />{" "}
          |
          <input
            type="button"
            value="Register"
            className="btn btn-light"
            onClick={this.handleRegister.bind(this)}
          />
          <br></br>
          <div className="card mb-3">
            <div className="card-header">User details </div>
            <div className="card-body ">
              <form onSubmit={this.onSubmit.bind(this)}>
                <TextInputGroup
                  label="Email"
                  name="email"
                  value={email}
                  placeholder="Enter Email"
                  onChange={this.onChange}
                  type="email"
                  error={errors.email}
                />
                <TextInputGroup
                  label="Password"
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  onChange={this.onChange}
                  error={errors.password}
                />
                {loginDesc === "Register" ? (
                  <div>
                    <TextInputGroup
                      label="PasswordConfirm"
                      name="passwordConfirm"
                      type="password"
                      value={passwordConfirm}
                      placeholder="Enter Password"
                      onChange={this.onChange}
                      error={errors.passwordConfirm}
                    />
                    <TextInputGroup
                      label="Name"
                      name="name"
                      value={name}
                      placeholder="Enter Name"
                      onChange={this.onChange}
                      error={errors.name}
                    />
                  </div>
                ) : null}

                <input
                  type="submit"
                  value={loginDesc}
                  className="btn btn-light btn-block "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginUser.propTypes = {
  addUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired,
  loggedIn: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.user.users,
  login: state.login
});

export default connect(mapStateToProps, {
  addUser,
  getUsers,
  loggedUser,
  loggedIn
})(LoginUser);
