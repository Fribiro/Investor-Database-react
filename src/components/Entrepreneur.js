import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";;

export default class Entrepreneur extends Component {
  state = {
    visible: true,
  };
        
    render() {
        return (
          <div>
            {this.state.visible ? <Header /> : null}
            <header className="intro">
              <div className="investor-header nav-anime">
                <img src="/img/workdream.jpg" alt="" />
              </div>
            </header>

            <section className="investor-quote">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              <br />
              <h3>
                Don’t try to do everything by yourself, but try to connect with
                people and resources. Having that discipline and perseverance is
                really important.
              </h3>
              <br />
              <i className="fa fa-quote-right" aria-hidden="true"></i>
              <br />
              <h4> - Chieu Cao, Co-founder of Perkbox</h4>
            </section>
            <div className="category-content">
              <div className="row-one">
                <div className="grid-one-one">
                  <div className="card">
                    <img
                      src="/img/agri.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Agribusiness</h4>
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
                      src="/img/entertainment.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Entertainment</h4>
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
                      src="/img/fashion.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Fashion</h4>
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
                      src="/img/f&b.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Food &amp; Beverage</h4>
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
                      src="/img/logistics.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4>Supply &amp; logistics</h4>
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
