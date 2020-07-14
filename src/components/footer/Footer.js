import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col s4">
            <h5 class="white-text">Who we are?</h5>

            <p class="grey-text text-lighten-4">
              Add some texutal content for describing about your
              company.organization or website.
            </p>
          </div>

          <div class="col s4">
            <h5 class="white-text">Categories</h5>

            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  jQuery
                </a>
              </li>

              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  JavaScript
                </a>
              </li>

              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  CSS
                </a>
              </li>

              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  HTML
                </a>
              </li>
            </ul>
          </div>

          <div class="col 4">
            <h5 class="white-text">About </h5>

            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  About the Company
                </a>
              </li>

              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Privacy
                </a>
              </li>

              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Contact Support
                </a>
              </li>

              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">
          © 2020 Copyright - All Rights Reserved
          <a class="grey-text text-lighten-4 right" href="#!">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
