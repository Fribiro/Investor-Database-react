import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
          <div>
            <div className="userProfile">
              <div className="profileNav row">
                <div className="userHeader">
                  <img src="/img/user1.jpg" alt="" />
                </div>
                <div className="userNav">
                  <ul>
                    <li>Username</li>
                    <li>Edit Profile</li>
                    <li>Business</li>
                    <li>Location</li>
                    <li>Email</li>
                  </ul>
                </div>
              </div>
              <div className="profileDetails"></div>
            </div>
          </div>
        );
    }
}
