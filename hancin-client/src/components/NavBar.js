import React, { Component } from "react";
import M from "materialize-css";
import logo from "../media/slogo.png";
class NavBar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, true);
    });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, true);
    });
  }
  render() {
    return (
      <div>
        <nav>
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
          <div
            class="nav-wrapper grey darken-4"
            style={{ paddingBottom: "20px" }}
          >
            <a href="/" class="brand-logo">
              <img
                src={logo}
                width="220px"
                height="50px"
                style={{ marginLeft: "50px" }}
              />
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="/products">Our Products</a>
              </li>
              <li>
                <a href={"/about"}>About Us</a>
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

        <ul id="slide-out" class="sidenav">
          <li>
            <div class="user-view">
              <div class="background">
                <img src={logo} width="200px" height="50px"/>
              </div>
              <a href="#">
                <img  class="" alt="" />
              </a>
              <a href="#">
                <span class="white-text name"></span>
              </a>
              <a href="#">
                <span class="white-text email"></span>
              </a>
            </div>
          </li>
          <li>
            <a href={"/about"} style={{textAlign:"left"}}>
              <i class="material-icons">info</i><a href={"/about"}>About Us</a>
            </a>
          </li>
          <li>
          <a style={{textAlign:"left"}}>
          <i class="material-icons">shop</i><a href="/products">Our Products</a>
          </a>
          </li>
          <li>
            <div class="divider"></div>
          </li>
          <li>
            <a class="subheader"></a>
          </li>
          <li>
            <a class="waves-effect" href="#">
              
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;