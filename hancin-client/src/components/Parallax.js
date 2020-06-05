import React, { Component } from "react";
import M from "materialize-css";
import image1 from "../media/Blocks/sample.jpg";
import image3 from "../media/Bricks.jpg";
import image4 from "../media/cob.jpg";

class Parallax extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".parallax");
      var instances = M.Parallax.init(elems, true);
    });
  }
  render() {
    return (
      <div>
        <div class="parallax-container" style={{ height: "300px" }}>
          <div class="parallax">
            <img src={image1} />
          </div>
        </div>
        <div class="section grey darken-4">
          <div class="row container">
            <h3 class="white-text header" style={{ textAlign: "left" }}>
              Who we are
            </h3>
            <p
              class="white-text text-darken-3 lighten-3"
              style={{ textAlign: "left" }}
            >
              Hancin Interlock is one of the leading organizations in the
              manufacture and supply of concrete landscape products. Established
              in 1963, Hancin Interlock has built a reputation collaborating
              with organizations in numerous countries along with rooving
              factories in different parts of Egypt.On a personal range, Hancin
              interlock has been providing its services to many homes and
              restaurants throughout Egypt creating gardens, parking spots,
              swimming pools and chosen areas by the owner along with full
              consultation.
            </p>
          </div>
        </div>
        <div class="parallax-container" style={{ height: "300px" }}>
          <div class="parallax">
            <img src={image3} />
          </div>
        </div>
        <div class="section grey darken-4">
          <div class="row container">
            <h2 class="white-text header" style={{ textAlign: "left" }}>
              Our Operations
            </h2>
            <p
              class="white-text text-darken-3 lighten-3"
              style={{ textAlign: "left" }}
            >
              Hancin Interlock has created and implemented the idea of rooving
              factories, in which we prepare a practical factory specified to
              your project size and demand right beside the construction area
              then leave the location once the project is complete.Since many
              countries and cities are seeking such a business but lack the
              knowledge of how to begin or make the business successful along
              with the complicated production process, Hancin Interlock has
              introduced a sector within the company in which we were able to
              start-up a factory in any requiring country by providing full
              consultation, training and all machinery needed.
            </p>
          </div>
        </div>
        <div class="parallax-container" style={{ height: "300px" }}>
          <div class="parallax">
            <img src={image4} />
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
