import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer grey darken-4">
        <div class="container">
          <div class="row">
            <div class="col l3">
              <h5 class="white-text">Hancin Interlock</h5>
              <p class="grey-text text-lighten-4">
                Established in 1963, Hancin Interlock has been providing its
                products and services for over 50 years to personal customers
                and organizations all over Egypt and in different regions of the
                world.
              </p>
            </div>
            <div class="col l3">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Organizatons
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Personal
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    International
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div class="col l3">
              <h5 class="white-text">Social Media</h5>
              <a href="https://www.facebook.com" class="fa fa-facebook"></a>
              <a href="https://www.twitter.com" class="fa fa-twitter"></a>
              <a href="https://www.google.com" class="fa fa-google"></a>
              <br></br>
              <a href="#" class="fa fa-linkedin"></a>
              <a href="#" class="fa fa-youtube"></a>
              <a href="#" class="fa fa-rss"></a>
            </div>
            <div class="col l3">
              <h5 class="white-text">Contact Us</h5>
              <ul>
                <li>
                  <p class="grey-text text-lighten-3" href="#!">
                    Phone: 01012345678
                  </p>
                </li>
                <li>
                  <p class="grey-text text-lighten-3" href="#!">
                    Email: info@hancin.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2020 Hancin Interlock
            <a class="grey-text text-lighten-4 right" href="#!">
              Site Map
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
