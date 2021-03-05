import React, { Component } from 'react'

import Header from "./Header";
import Footer from "./Footer";

import InvestorSignup from './InvestorSignup'
import EntrepreneurSignup from './EntrepreneurSignup';
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
            Entrepreneur
          </div>
          <div
            className={
              "controller " +
              (this.state.isRegisterOpen ? "selected-controller" : "")
            }
            onClick={this.showSignup.bind(this)}
          >
            Investor
          </div>
        </div>

        <div className="box-container">
          {this.state.isLoginOpen && <EntrepreneurSignup/>}
          {this.state.isRegisterOpen && <InvestorSignup/>}
        </div>
        {this.state.visible ? <Footer /> : null}
      </div>
    );
  }
}