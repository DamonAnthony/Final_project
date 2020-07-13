import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">
          Lorem
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
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
