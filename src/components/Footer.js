import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Footer extends Component {
    render() {
        return (
          <div>
            <div className="footer-top">
              <div className="footer-background-image"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
                    <h4>EkezaKenya</h4>
                    <p>
                      Your trusted digital platform for getting funding or
                      investing in businesses.
                    </p>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
                    <h3>Page Links</h3>
                    <ul>
                      <li>
                        <Link to="/entrepreneur">Entrepreneur</Link>
                      </li>
                      <li>
                        <Link to="/investor">Investor</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 segment-three sm-mb-30">
                    <h3>Follow Us</h3>
                    <p>
                      Follow us on our social media platforms, to stay updated.
                    </p>
                    <Link to="">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link to="">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 segment-four sm-mb-30">
                    <h3>Newsletter</h3>
                    <p>
                      Subscribe to our newsletter to receive regular updates via
                      your email.
                    </p>
                    <form action="">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                      />
                      <input type="submit" value="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom-text">
              All Rights reserved by &copy; 2020 EkezaKenya.
            </div>
          </div>
        );
    }
}
