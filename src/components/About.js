import React, { Component } from 'react'
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default class About extends Component {
    state = {
      visible: true,
    };
  
    render() {
        return (
          <div>
            {this.state.visible ? <Header /> : null}
            <header className="">
              <div className="about-header nav-anime">
                <div className="about-header-img">
                  <img src="/img/desk6.jpg" alt="" />
                </div>
                <div className="about-header-text">
                  <h2>YOUR STEPPING-STONE FROM THE FUTURE</h2>
                  <p>
                    As a founder, lay all the possible scenarios -- from best to
                    worst -- in front of you, so you don’t get surprised when
                    something happens.
                  </p>
                </div>
              </div>
            </header>

            <h2 id="founder-title">THE FOUNDER</h2>
            <div className="about-body-founder">
              <div className="founder-img">
                <img src="/img/founder.jpg" alt="" />
              </div>
              <div className="founder-text">
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                <br />
                <br />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose.
                </p>
                <i className="fa fa-quote-right" aria-hidden="true"></i>
              </div>
            </div>
            <section className="testimonials">
              <div className="testimonial-container">
                <h2>EXECUTIVE BOARD</h2>
                <p>
                  The three senior most executives work hand in hand with the
                  rest of the stuff to deliver high quality services.
                </p>
                <div className="row">
                  <div className="col-md-4 text-center">
                    <div className="profile">
                      <img src="/img/user1.jpg" alt="" className="user" />
                      <blockquote>
                        I have invested in quite a number of businesses and I
                        can attest to the viability of the opportunities on this
                        platform. Not forgetting the careful handling of member
                        data. Therefore I highly recommend this online platform
                        to execute secure transactions.
                      </blockquote>
                      <h3>
                        Darshan Chandaria<span> Founder &amp; CEO </span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="profile">
                      <img src="/img/user2.jpg" alt="" className="user" />
                      <blockquote>
                        I have invested in quite a number of businesses and I
                        can attest to the viability of the opportunities on this
                        platform. Not forgetting the careful handling of member
                        data. Therefore I highly recommend this online platform
                        to execute secure transactions.
                      </blockquote>
                      <h3>
                        Esther Nyambura<span> Co-Founder &amp; COO </span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="profile">
                      <img src="/img/user3.jpg" alt="" className="user" />
                      <blockquote>
                        I have invested in quite a number of businesses and I
                        can attest to the viability of the opportunities on this
                        platform. Not forgetting the careful handling of member
                        data. Therefore I highly recommend this online platform
                        to execute secure transactions.
                      </blockquote>
                      <h3>
                        Frank Felix<span> CFO </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="section-three">
              <h2
                className="animate__animated animate__fadeInDown"
                style={{ animationDelay: "1s" }}
              >
                <span>JOIN OUR EVER GROWING COMMUNITY OF BUSINESS GURUS.</span>
                <br />
                "In investing, what is comfortable is rarely profitable." -
                Robert Arnott At times, you will have to step out of your
                comfort zone to realize significant gains. Know the boundaries
                of your comfort zone and practice stepping out of it in small
                doses. As much as you need to know the market, you need to know
                yourself too. Can you handle staying in when everyone else is
                jumping ship? Or getting out during the biggest rally of the
                century? There's no room for pride in this kind of
                self-analysis. The best investment strategy can turn into the
                worst if you don't have the stomach to see it through.
              </h2>
              <p
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: "2s" }}
              ></p>
              <div className="section-three-video-container">
                <div className="section-three-color-overlay"></div>
                <video
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "fill",
                  }}
                  autoplay
                  loop
                  muted
                >
                  <source src="/videos/deal1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="about-body z-depth-3">
              <div className="about-body-image1">
                <img src="/img/desk8.jpg" alt="" />
              </div>
              <div className="about-body-image2">
                <img src="/img/desk9.jpg" alt="" />
              </div>
              <div className="about-body-text">
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                <br />
                <p>
                  As a founder, lay all the possible scenarios -- from best to
                  worst -- in front of you, so you don’t get surprised when
                  something happens.Contrary to popular belief, Lorem Ipsum is
                  not simply random text. It has roots in a piece of
                  classNameical Latin literature from 45 BC, making it over 2000
                  years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classNameical
                  literature, discovered the undoubtable source.
                </p>
              </div>
            </div>
            {this.state.visible ? <Footer /> : null}
          </div>
        );
    }
}
