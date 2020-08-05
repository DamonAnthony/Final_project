import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import "./NavBar.css";

const NavBar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.username}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/Register">Register</Link>
      </li>
      <li>
        <Link to="/Login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <nav className="grey darken-4">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Bacon's Bits
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/Store">Store</Link>
          </li>
          <li>
            <Link to="/AboutUs">AboutUs</Link>
          </li>
          <li>
            <Link to="/ContactUs">ContactUs</Link>
          </li>
          <li>
            <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
