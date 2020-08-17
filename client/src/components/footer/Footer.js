import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer grey darken-4">
      <div className="container">
        <div className="row">
          <div className="col s4">
            <h5 className="white-text">Who we are?</h5>

            <p className="grey-text text-lighten-4">
              Bacon's bits is the best place to get great deals on games
            </p>
          </div>

          <div className="col 4 offset-s4">
            <h5 className="white-text">About </h5>

            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="/AboutUs">
                  About Us
                </a>
              </li>

              <li>
                <a className="grey-text text-lighten-3" href="/ContactUs">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">© 2020 Copyright - All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
