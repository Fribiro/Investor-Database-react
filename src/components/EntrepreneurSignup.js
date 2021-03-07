import React, { Component } from 'react'
import Axios from 'axios'
import {Redirect} from "react-router-dom"

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

export default class EntrepreneurSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      efirstName: "",
      elastName: null,
      eemail: null,
      epassword: null,
      econfirmPassword: null,
      formErrors: {
        efirstName: "",
        elastName: "",
        eemail: "",
        epassword: "",
        econfirmPassword: "",
      },
      pwdState: null,
      message: "",
      redirect: null
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
      case "efirstName":
        formErrors.efirstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "elastName":
        formErrors.elastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "eemail":
        formErrors.eemail = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "epassword":
        formErrors.epassword =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "econfirmPassword":
        formErrors.econfirmPassword =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  addInvestor = (e) => {
    let formData = { ...this.state };
    console.log(formData.efirstName);
    Axios.post("http://localhost:5500/auth/entrepreneursignup", {
      efirstName: formData.efirstName,
      elastName: formData.elastName,
      eemail: formData.eemail,
      epassword: formData.epassword,
      econfirmPassword: formData.econfirmPassword,
    }).then((res) => {
      console.log(res);
      if (res.status === 201) {
        console.log(res);
        this.setState({
          redirect: "/login",
        });
        console.log("Success");
      } else {
        this.setState({
          message: res.data.message,
        });
      }
    });
  }

  showEntrepreneurs = (e) => {
    Axios.get("http://localhost:5500/admin").then((results) => {

    })
  }

  render() {
    const { formErrors } = this.state;

    let pwdWeak = false,
      pwdMedium = false,
      pwdStrong = false;

    if (this.state.pwdState === "weak") {
      pwdWeak = true;
    } else if (this.state.pwdState === "medium") {
      pwdWeak = true;
      pwdMedium = true;
    } else if (this.state.pwdState === "strong") {
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }
    if(this.state.redirect){
    return <Redirect to={this.state.redirect}/>
    }
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group ">
            <label htmlFor="efirstName">First name</label>
            <input
              type="text"
              name="efirstName"
              className={formErrors.efirstName.length > 0 ? "error" : null}
              placeholder="First Name"
              onChange={this.handleChange}
            />
            {formErrors.efirstName.length > 0 && (
              <small className="danger-error">{formErrors.efirstName}</small>
            )}
          </div>
          <div className="input-group lastName">
            <label htmlFor="elastName">Last Name</label>
            <input
              type="text"
              name="elastName"
              className={formErrors.elastName.length > 0 ? "error" : null}
              placeholder="Last Name"
              onChange={this.handleChange}
            />
            {formErrors.elastName.length > 0 && (
              <small className="danger-error">{formErrors.elastName}</small>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="eemail">Email</label>
            <input
              type="text"
              name="eemail"
              className={formErrors.eemail.length > 0 ? "error" : null}
              placeholder="Email"
              onChange={this.handleChange}
            />
            {formErrors.eemail.length > 0 && (
              <small className="danger-error">{formErrors.eemail}</small>
            )}

            {this.state.message && (
              <small className="danger-error">{this.state.message}</small>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="epassword">Password</label>
            <input
              type="password"
              name="epassword"
              className={formErrors.epassword.length > 0 ? "error" : null}
              placeholder="Password"
              onChange={this.handleChange}
            />
            {formErrors.epassword.length > 0 && (
              <small className="danger-error">{formErrors.epassword}</small>
            )}
            {this.state.password && (
              <div className="password-state">
                <div
                  className={"pwd pwd-weak " + (pwdWeak ? "show" : "")}
                ></div>
                <div
                  className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}
                ></div>
                <div
                  className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}
                ></div>
              </div>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="econfirmPassword">Confirm Password</label>
            <input
              type="password"
              name="econfirmPassword"
              className={
                formErrors.econfirmPassword.length > 0 ? "error" : null
              }
              placeholder="Password"
              onChange={this.handleChange}
            />
            {formErrors.econfirmPassword.length > 0 && (
              <small className="danger-error">
                {formErrors.econfirmPassword}
              </small>
            )}
            {this.state.message && (
              <small className="danger-error">{this.state.message}</small>
            )}
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this.addInvestor}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}