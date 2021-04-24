import React from 'react';
import { Link,withRouter } from "react-router-dom";

function Navbar(props){

    return(
      <div className="nav justify-content-center">
        <a class="navbar-button active icon-card" href="#home-section" >Home</a>
        <a class="navbar-button icon-card" href="#about-section">About</a >
        <a class="navbar-button icon-card" href="mailto:anandhu4310@gmail.com" >Contact</a >
        <a class="navbar-button icon-card">Resume</a >
        <li
                class={`nav-item  ${
                  props.location.pathname === "/work" ? "active" : ""
                }`}
              >
                <Link class="nav-link navbar-button icon-card" to="/work">
                  Work
                </Link>
              </li>
      </div>
    );
}


export default withRouter(Navbar);