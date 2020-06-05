import React, { Component } from "react";
import "materialize-css";
class About extends Component {
  render() {
    return (
      <div className="container">
        <h5 style={{textAlign:"left"}}>About us:</h5>
        <h6 style={{textAlign:"left"}}>
          Established in 1963, Hancin Interlock has been providing its products
          and services for over 50 years to personal customers and organizations
          all over Egypt and in different regions of the world.
        </h6>
        <h5 style={{textAlign:"left"}}>Organizatons:</h5>
        <h6 style={{textAlign:"left"}}>
          Hancin Interlock has created and implemented the idea of rooving
          factories, in which we prepare a practical factory specified to your
          project size and demand right beside the construction area then leave
          the location once the project is complete.
        </h6>
        <h5 style={{textAlign:"left"}}>Personal:</h5>
        <h6 style={{textAlign:"left"}}>
          On a personal range, Hancin interlock has been providing its services
          to many homes and restaurants throughout Egypt creating gardens,
          parking spots, swimming pools and chosen areas by the owner along with
          full consultation.
        </h6>
        <h5 style={{textAlign:"left"}}>International:</h5>
        <h6 style={{textAlign:"left"}}>
          Since many countries and cities are seeking such a business but lack
          the knowledge of how to begin or make the business successful along
          with the complicated production process, Hancin Interlock has
          introduced a sector within the company in which we were able to
          start-up a factory in any requiring country by providing full
          consultation, training and all machinery needed.
        </h6>

        <h5 style={{textAlign:"left"}} >Main Branches:</h5>
        <h6 style={{textAlign:"left"}}>Cairo – Alexandria – El Gouna</h6>
        <br></br>
      </div>
    );
  }
}

export default About;
