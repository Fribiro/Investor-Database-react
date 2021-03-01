import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default class Investor extends Component {
  state = {
    visible: true,
  };
        
    render() {
        return (
          <div>
            {this.state.visible ? <Header /> : null}
            <header>
              <div className="investor-header nav-anime">
                <img src="/img/invword.jpg" alt="" />
              </div>
            </header>

            <section className="investor-quote">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              <br />
              <h3>
                It's not how much money you make, but how much money you keep,
                how hard it works for you, and how many generations you keep it
                for.
              </h3>
              <br />
              <i className="fa fa-quote-right" aria-hidden="true"></i>
              <br />
              <h4> - Robert Kiyosaki</h4>
            </section>
            <div className="category-content">
              <div className="row-one">
                <div className="grid-one-one">
                  <div className="card">
                    <img
                      src="/img/venture1.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Venture Capitalist</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Link to="#">View More</Link>
                    </div>
                  </div>
                </div>
                <div className="grid-one-two">
                  <div className="card">
                    <img
                      src="/img/angel.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Angel Investors</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Link to="#">View More</Link>
                    </div>
                  </div>
                </div>
                <div className="grid-one-three">
                  <div className="card">
                    <img
                      src="/img/accelerator.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Accelerators & Incubators</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Link to="#">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-two">
                <div className="grid-two-one">
                  <div className="card">
                    <img
                      src="/img/corporate.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Corporate Investors</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Link to="#">View More</Link>
                    </div>
                  </div>
                </div>
                <div className="grid-two-two">
                  <div className="card">
                    <img
                      src="/img/p2p.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Peer-to-peer</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Link to="#">View More</Link>
                    </div>
                  </div>
                </div>
                <div className="grid-two-three">
                  <div className="card">
                    <img
                      src="/img/desk7.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Link to="#">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.state.visible ? <Footer /> : null}
          </div>
        );
    }
}
