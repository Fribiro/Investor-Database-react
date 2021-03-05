import React, { Component } from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import PersonalDetails from "./PersonalDetails";
import BusinessDetails from "./BusinessDetails";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class Profile extends Component {
  state = {
    visible: true,
  };
  render() {
    return (
      <div>
        <Header/>
        <div className="userProfile">
          <div className="profileNav row">
            <div className="userHeader">
              <img src="/img/user1.jpg" alt="" />
            </div>
            <div className="userNav">
              <ul className="sideheaders">
                <li>Username</li>
                <li
                  className="profileNavClickable"
                  onClick={() => {
                    this.setState({ visible: true });
                  }}
                >
                  Profile
                </li>
                <li
                  className="profileNavClickable"
                  onClick={() => {
                    this.setState({ visible: false });
                  }}
                >
                  Business Profile
                </li>
                <li>Location</li>
                <li>Email</li>
              </ul>
            </div>
          </div>

          <div className="profileDetails">
            {this.state.visible ? <PersonalDetails /> : null}
            {!this.state.visible ? <BusinessDetails /> : null}
          </div>
        </div>
        <Footer /> 
      </div>
    );
  }
}
