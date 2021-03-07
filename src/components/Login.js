import React, { Component } from 'react'
import Axios from "axios";
import { Redirect } from "react-router-dom";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: "",
      },
      message: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  submitLogin = (e) => {
    let formData = { ...this.state };
    Axios.post("http://localhost:5500/auth/login", {
      email: formData.email,
      password: formData.password,
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        this.setState({
          redirect: "/profile",
        });
        console.log("Logged in");
      } else if (res.status === 400) {
        this.setState({
          message: res.data.message,
        });
      } else if (res.status === 401) {
        this.setState({
          message: res.data.message,
        });
      }
    });
  };

  render() {
    const { formErrors } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="root-container">
        <div className="box-container login">
          <div className="inner-container">
            <div className="header">Login</div>
            <div className="box">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <small className="danger-error">{formErrors.email}</small>
                )}
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <small className="danger-error">{formErrors.password}</small>
                )}
                {this.state.message && (
                  <small className="danger-error">{this.state.message}</small>
                )}
              </div>

              <button
                type="button"
                className="login-btn"
                onClick={this.submitLogin.bind(this)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
