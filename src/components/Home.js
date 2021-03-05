import React, { Component } from 'react'
import Header from "./Header";
import Footer from "./Footer";

export default class Home extends Component {
  state = {
    visible: true,
  };

    render() {
        return (
          <div>
            {this.state.visible ? <Header /> : null}
            <div
              id="carouselExampleCaptions"
              className="carousel slide nav-anime"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li data-target="#" data-slide-to="0" className="active"></li>
                <li data-target="#" data-slide-to="1"></li>
                <li data-target="#" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/img/office1.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      Reliable
                    </h5>
                    <p>
                      Our team of highly skilled developers and technicians work
                      around the clock to ensure zero to no failure or downtime.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/img/dev.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      Secure
                    </h5>
                    <p>
                      Stringent policies and measures have been put in place to
                      ensure atmost security of your data and transactions
                      carried out on our platform.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/office.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      Transparent
                    </h5>
                    <p>
                      Structures are in place to facilitate openness in the way
                      business is carried out.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            <div className="home-about">
              <h2>Core Values</h2>
              {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
              <div className="columns">
                <div className="col">
                  <h3>Integrity</h3>
                  <p>
                    At EkezaKenya we offer you consistent and uncompromising
                    adherence to strong moral and ethical principles and values
                    from the onset.
                  </p>
                </div>
                <div className="col ">
                  <h3>Transparency</h3>
                  <p>
                    Have any worries? Fear not, for we operate in a way that
                    creates openness between the Organization, the Investor and
                    the Entrepreneur.
                  </p>
                </div>
                <div className="col">
                  <h3>Security</h3>
                  <p>
                    EkezaKenya has stringent top notch policies and measures put
                    in place as per the regulatory bodies to ensure security of
                    your intellectual property.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-content">
              <div className="section-one">
                <div className="section-one-img ">
                  <img src="/img/businessman.jpg" alt="" />
                </div>
                <div className="section-one-text ">
                  <h2>INVEST WITH US</h2>
                  <p>
                    Ready to invest and earn from the comfort of your seat? Look
                    no further, we bring to you the best online business
                    experience. At you disposal is a pool of entrepreneurs
                    running their businesses but in search of funding to take
                    their enterprises to the next level.{" "}
                  </p>
                  <div className="get-started-btn">
                    <button type="button" name="button">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <main></main>
              <div className="section-two">
                <div className="section-two-text ">
                  <h2>GROW WITH US</h2>
                  <p>
                    Have you been in constant thought? Do you seek to grow your
                    enterprise? Well, you're in the right place. With us, you
                    and your business are exposed to a consortium of investor
                    ready to fund your enterprise. You're welcome to join our
                    database of like minded people with a common drive and goal.
                  </p>
                  <br />
                  <div className="get-started-btn">
                    <button type="button" name="button" href="">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className="section-two-img ">
                  <img src="/img/board.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="section-three">
              <h2>
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
              <p></p>
              <div className="section-three-video-container">
                <div className="section-three-color-overlay"></div>
                <video
                  style={{ maxWidth: "100%", height: "auto", objectFit: "2s" }}
                  autoplay
                  loop
                  muted
                >
                  <source src="/videos/deal1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <section className="testimonials">
              <div className="testimonial-container">
                <h2>TESTIMONIALS</h2>
                <p></p>
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
                        Darshan Chandaria
                        <span>
                          {" "}
                          Group CEO &amp; a Shareholder of Chandaria Group
                        </span>
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
                        Olive Gachara
                        <span> Editor-in-Chief and Founder Couture Africa</span>
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
                        Kris Senanu
                        <span>Founder of Blackrock Capital Investments</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="profile">
                      <img src="/img/user4.jpg" alt="" className="user" />
                      <blockquote>
                        I have invested in quite a number of businesses and I
                        can attest to the viability of the opportunities on this
                        platform. Not forgetting the careful handling of member
                        data. Therefore I highly recommend this online platform
                        to execute secure transactions.
                      </blockquote>
                      <h3>
                        Wandia Gichuru
                        <span> Co-Founder &amp; CEO of Vivo Activewear</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="profile">
                      <img src="/img/user5.jpg" alt="" className="user" />
                      <blockquote>
                        I have invested in quite a number of businesses and I
                        can attest to the viability of the opportunities on this
                        platform. Not forgetting the careful handling of member
                        data. Therefore I highly recommend this online platform
                        to execute secure transactions.
                      </blockquote>
                      <h3>
                        Wandia Gichuru
                        <span> Co-Founder &amp; CEO of Vivo Activewear</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="profile">
                      <img src="/img/user6.jpg" alt="" className="user" />
                      <blockquote>
                        I have invested in quite a number of businesses and I
                        can attest to the viability of the opportunities on this
                        platform. Not forgetting the careful handling of member
                        data. Therefore I highly recommend this online platform
                        to execute secure transactions.
                      </blockquote>
                      <h3>
                        Wandia Gichuru
                        <span> Co-Founder &amp; CEO of Vivo Activewear</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {this.state.visible ? <Footer /> : null}
          </div>
        );
    }
}
