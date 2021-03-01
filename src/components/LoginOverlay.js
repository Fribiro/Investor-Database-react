import React, { Component } from 'react'
import TransitionGroup from "react-transition-group";

import FadeTransition from "./transitions/fadeTransition";
import Header from "./Header";
import Footer from "./Footer";

import Login from './Login'
import Signup from './Signup'
export default class LoginOverlay extends Component {
  state = {
    visible: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
    };
  }

  showLogin() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showSignup() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <div className="root-container">
        {this.state.visible ? <Header /> : null}
        <div className="box-controller">
          <div
            className={
              "controller " +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLogin.bind(this)}
          >
            Login
          </div>
          <div
            className={
              "controller " +
              (this.state.isRegisterOpen ? "selected-controller" : "")
            }
            onClick={this.showSignup.bind(this)}
          >
            Register
          </div>
        </div>

        <FadeTransition isOpen={this.state.isLoginOpen} duration={500}>
          <div className="box-container">
            <Login />
          </div>
        </FadeTransition>
        <FadeTransition isOpen={this.state.isRegisterOpen} duration={500}>
          <div className="box-container">
            <Signup />
          </div>
        </FadeTransition>
        {this.state.visible ? <Footer /> : null}
      </div>
    );
  }
}