import React, { Component } from "react";
import M from "materialize-css";
import logo from "../media/slogo.png";
class NavBar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, true);
    });
  }
  render() {
    return (
      <nav>
        <div
          class="nav-wrapper grey darken-4"
          style={{ paddingBottom: "20px" }}
        >
          <a href="/" class="brand-logo">
            <img
              src={logo}
              width="225px"
              height="65px"
              style={{ marginLeft: "50px" }}
            />
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="/products">Our Products</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a class="dropdown-trigger" href="#" data-target="dropdown1">
                Dropdown<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
          {/*
          <ul id="dropdown1" class="dropdown-content">
            <li>
              <a href="#">one</a>
            </li>
            <li>
              <a href="#">two</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">three</a>
            </li>
          </ul>
          */}
        </div>
      </nav>
    );
  }
}

export default NavBar;
