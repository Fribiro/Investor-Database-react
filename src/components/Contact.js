import React, { Component } from 'react'
import Header from "./Header";
import Footer from "./Footer";

export default class Contact extends Component {
    state = {
        visible: true,
    };
        
    render() {
        return (
          <div>
            {this.state.visible ? <Header /> : null}
            {this.state.visible ? <Footer /> : null}
          </div>
        );
    }
}
