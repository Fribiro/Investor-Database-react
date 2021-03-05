//import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Entrepreneur from "./components/Entrepreneur";
import Investor from "./components/Investor";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/profile/Profile";
import LoginOverlay from "./components/LoginOverlay"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/entrepreneur" component={Entrepreneur} />
          <Route exact path="/investor" component={Investor} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={LoginOverlay} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
