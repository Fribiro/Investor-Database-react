import React, { Component } from 'react'

export default class PersonalDetails extends Component {
    render() {
        return (
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>Kshiti Ghelani</h5>
                  <h6>Web Developer and Designer</h6>
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>

            <div className="row">
              <div className="row">
                <div className="col-md-6 profile-sub-headers">
                  <label>Personal Details</label>
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>Kshiti123</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Kshiti Ghelani</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>kshitighelani@gmail.com</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>National ID</label>
                      </div>
                      <div className="col-md-6">
                        <p>24098674</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Gender</label>
                      </div>
                      <div className="col-md-6">
                        <p>Female</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>123 456 7890</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>Web Developer and Designer</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>kshitighelani@gmail.com</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>kshitighelani@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 profile-sub-headers">
                  <label>Address Details</label>
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Street</label>
                      </div>
                      <div className="col-md-6">
                        <p>Kimathi</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Town</label>
                      </div>
                      <div className="col-md-6">
                        <p>Ruiru</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>City</label>
                      </div>
                      <div className="col-md-6">
                        <p>Nairobi</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Address</label>
                      </div>
                      <div className="col-md-6">
                        <p>98674</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Postal Code</label>
                      </div>
                      <div className="col-md-6">
                        <p>00100</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>County</label>
                      </div>
                      <div className="col-md-6">
                        <p>Nairobi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
