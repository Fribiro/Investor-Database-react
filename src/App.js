//import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Entrepreneur from "./components/Entrepreneur";
import Investor from "./components/Investor";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import LoginOverlay from "./components/LoginOverlay"
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <LoginOverlay/>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
