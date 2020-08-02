import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer grey darken-4">
      <div class="container">
        <div class="row">
          <div class="col s4">
            <h5 class="white-text">Who we are?</h5>

            <p class="grey-text text-lighten-4">
              Bacon's bits is the best place to get great deals on games
            </p>
          </div>

          <div class="col 4 offset-s4">
            <h5 class="white-text">About </h5>

            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="/aboutUs">
                  About Us
                </a>
              </li>

              <li>
                <a class="grey-text text-lighten-3" href="/contactUs">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">© 2020 Copyright - All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
