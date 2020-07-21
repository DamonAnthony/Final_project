import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="grey darken-4">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Bacon's Bits
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/store">Store</a>
          </li>
          <li>
            <a href="/aboutUs">AboutUs</a>
          </li>
          <li>
            <a href="/contactUs">ContactUs</a>
          </li>
          <li>
            <a href="/signIn">SignIn</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
