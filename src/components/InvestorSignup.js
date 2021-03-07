import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

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

export default class InvestorSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifirstName: "",
      ilastName: null,
      iemail: null,
      ipassword: null,
      iconfirmPassword: null,
      formErrors: {
        ifirstName: "",
        ilastName: "",
        iemail: "",
        ipassword: "",
        iconfirmPassword: "",
      },
      pwdState: null,
      message: "",
      redirect: null,
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
      case "ifirstName":
        formErrors.ifirstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "ilastName":
        formErrors.ilastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "eemail":
        formErrors.iemail = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "ipassword":
        formErrors.ipassword =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "iconfirmPassword":
        formErrors.iconfirmPassword =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  addInvestor = (e) => {
    let formData = { ...this.state };
    console.log(formData.ifirstName);
    Axios.post("http://localhost:5500/auth/investorsignup", {
      ifirstName: formData.ifirstName,
      ilastName: formData.ilastName,
      iemail: formData.iemail,
      ipassword: formData.ipassword,
      iconfirmPassword: formData.iconfirmPassword,
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
  };

  showEntrepreneurs = (e) => {
    Axios.get("http://localhost:5500/admin").then((results) => {
      
    });
  };

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
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group ">
            <label htmlFor="ifirstName">First name</label>
            <input
              type="text"
              name="ifirstName"
              className={formErrors.ifirstName.length > 0 ? "error" : null}
              placeholder="First Name"
              onChange={this.handleChange}
            />
            {formErrors.ifirstName.length > 0 && (
              <small className="danger-error">{formErrors.ifirstName}</small>
            )}
          </div>
          <div className="input-group lastName">
            <label htmlFor="ilastName">Last Name</label>
            <input
              type="text"
              name="ilastName"
              className={formErrors.ilastName.length > 0 ? "error" : null}
              placeholder="Last Name"
              onChange={this.handleChange}
            />
            {formErrors.ilastName.length > 0 && (
              <small className="danger-error">{formErrors.ilastName}</small>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="iemail">Email</label>
            <input
              type="text"
              name="iemail"
              className={formErrors.iemail.length > 0 ? "error" : null}
              placeholder="Email"
              onChange={this.handleChange}
            />
            {formErrors.iemail.length > 0 && (
              <small className="danger-error">{formErrors.iemail}</small>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="ipassword">Password</label>
            <input
              type="password"
              name="ipassword"
              className={formErrors.ipassword.length > 0 ? "error" : null}
              placeholder="Password"
              onChange={this.handleChange}
            />
            {formErrors.ipassword.length > 0 && (
              <small className="danger-error">{formErrors.ipassword}</small>
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
            <label htmlFor="iconfirmPassword">Confirm Password</label>
            <input
              type="password"
              name="iconfirmPassword"
              className={
                formErrors.iconfirmPassword.length > 0 ? "error" : null
              }
              placeholder="Password"
              onChange={this.handleChange}
            />
            {formErrors.iconfirmPassword.length > 0 && (
              <small className="danger-error">
                {formErrors.iconfirmPassword}
              </small>
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
