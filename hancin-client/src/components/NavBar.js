import React, { Component } from "react";
import "materialize-css";
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper grey darken-4">
            <a href="#!" class="brand-logo">
              Logo Goes Here
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Option 1</a>
              </li>
              <li>
                <a href="badges.html">Option 2</a>
              </li>
              <li>
                <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                  Dropdown<i class="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
            <ul id="dropdown1" class="dropdown-content">
              <li>
                <a href="#!">one</a>
              </li>
              <li>
                <a href="#!">two</a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="#!">three</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
