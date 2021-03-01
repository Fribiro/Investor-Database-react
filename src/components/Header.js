import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Header extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">EkezaKenya</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li> 
                        <li className="nav-item">
                        <Link className="nav-link" to="about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="investor" id="navbarDropdown" data-toggle="dropdown">
                            
                            Invest
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="#">Venture Capitalists</Link>
                            <Link className="dropdown-item" to="#">Angel Investors</Link>
                            <Link className="dropdown-item" to="#">Accelerators & Incubators</Link>
                            <Link className="dropdown-item" to="#">Corporate Investors</Link>
                            <Link className="dropdown-item" to="#">Peer-To-Peer</Link>
                        </div>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="entrepreneur" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                            Get Funding
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="#">Agribusiness</Link>
                            <Link className="dropdown-item" to="#">Entertainment</Link>
                            <Link className="dropdown-item" to="#">Fashion</Link>
                            <Link className="dropdown-item" to="#">Food and Beverages</Link>
                            <Link className="dropdown-item" to="#">Supply chain & logistics</Link>
                        </div>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="#">Contacts</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="signup">Register</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="login">Login</Link>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>

    </div>
        )
    }
}
