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
              <h5 class="white-text">Social Media</h5>
              <a href="https://www.facebook.com/hancincom/" class="fa fa-facebook"></a>
              <a href="#!" class="fa fa-twitter"></a>
              <a href="https://www.google.com/search?client=firefox-b-d&q=Hancin+Interlock" class="fa fa-google"></a>

            </div>
            <div class="col l3">
              <h5 class="white-text">Contact Us</h5>
              <ul>
                <li>
                  <p class="grey-text text-lighten-3" href="#!">
                    Phone: 01004910000 / 01008121674
                  </p>
                </li>
                <li>
                  <p class="grey-text text-lighten-3" href="#!">
                    Email: hancin-concrete@gmail.com
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
