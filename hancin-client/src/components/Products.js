import React, { Component } from "react";
import "../CSS/imageGrid.css";
import bardora from '../media/Blocks/Bardora.jpeg'
import butterfly from '../media/Blocks/Butterfly.jpeg'
import decor from '../media/Blocks/Decor.jpeg'
import fanTile from '../media/Blocks/Fan Tile.jpeg'
import fanstasia from '../media/Blocks/Fanstasia.jpeg'
import hearts from '../media/Blocks/Hearts.jpeg'
import hexagon from '../media/Blocks/Hexagon.jpeg'
import horusEyeTile from '../media/Blocks/HorusEyeTile.jpeg'
import iblock from '../media/Blocks/I-block.jpeg'
import lotus from '../media/Blocks/Lotus.jpeg'
import motadakhel from '../media/Blocks/Motadakhel.jpeg'
import xo from '../media/Blocks/Motadakhel.jpeg'
import LotusMass from '../media/Blocks/Lotus-Mass.jpeg'
import MassButterfly from '../media/Blocks/Mass-Butterfly.jpeg'
import MassDecor from '../media/Blocks/Mass-Decor.jpeg'
import MassHexagon from '../media/Blocks/Mass-Hexagon.jpeg'
import MassIblock from '../media/Blocks/Mass-Iblock.jpeg'
import MassXO from '../media/Blocks/Mass-XO.jpeg'

class Products extends Component {
  componentDidMount() {
    var header = document.getElementById("myHeader");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }
  // Full-width images
  one = () => {
    for (var i = 0; i < elements.length; i++) {
      var elements = document.getElementsByClassName("column");
      elements[i].style.flex = "100%";
    }
  };

  // Two images side by side
  two = () => {
    for (var i = 0; i < elements.length; i++) {
      var elements = document.getElementsByClassName("column");
      elements[i].style.flex = "50%";
    }
  };

  render() {
    return (
      <div class="container">
        <div class="header" id="myHeader">
          <h2 style={{textAlign:"left"}}>Our Product Variety</h2>
        </div>

        <div class="row">
          <div class="column">
              <div class="imageContainer">
              <img src={bardora} style={{width:"100%"}} />
                  <p class="imageText">Bardora</p>
              </div>
              <div class="imageContainer">
              <img src={butterfly} style={{width:"100%"}} />
                  <p class="imageTextNegative">Butterfly</p>
              </div>
              <div class="imageContainer">
              <img src={decor} style={{width:"100%"}} />
                  <p class="imageText">Decor</p>
              </div>
              <div class="imageContainer">
              <img src={fanTile} style={{width:"100%"}} />
                  <p class="imageText">Fan Tile</p>
              </div>
              <div class="imageContainer">
              <img src={fanstasia} style={{width:"100%"}} />
                  <p class="imageText">Fantasia</p>
              </div>
              <div class="imageContainer">
              <img src={hearts} style={{width:"100%"}} />
                  <p class="imageText">Hearts</p>
              </div>
              <div class="imageContainer">
              <img src={hexagon} style={{width:"100%"}} />
                  <p class="imageTextNegative">Hexagon</p>
              </div>
          </div>
          <div class="column">
          <div class="imageContainer">
              <img src={horusEyeTile} style={{width:"100%"}} />
                  <p class="imageText">Horus Eye Tile</p>
              </div>
              <div class="imageContainer">
              <img src={iblock} style={{width:"100%"}} />
                  <p class="imageTextNegative">I-Block</p>
              </div>
              <div class="imageContainer">
              <img src={lotus} style={{width:"100%"}} />
                  <p class="imageTextNegative">Lotus</p>
              </div>
              <div class="imageContainer">
              <img src={motadakhel} style={{width:"100%"}} />
                  <p class="imageText">Motadakhel</p>
              </div>
              <div class="imageContainer">
              <img src={xo} style={{width:"100%"}} />
                  <p class="imageText">X-O</p>
              </div>
              <div class="imageContainer">
              <img src={LotusMass} style={{width:"100%"}} />
                  <p class="imageText">Lotus Blocks</p>
              </div>
          </div>
          <div class="column">
          <div class="imageContainer">
              <img src={MassButterfly} style={{width:"100%"}} />
                  <p class="imageText">Butterfly Blocks</p>
              </div>
              <div class="imageContainer">
              <img src={MassDecor} style={{width:"100%"}} />
                  <p class="imageText">Decor Blocks</p>
              </div>
              <div class="imageContainer">
              <img src={MassHexagon} style={{width:"100%"}} />
                  <p class="imageText">Hexagon Blocks</p>
              </div>
              <div class="imageContainer">
              <img src={MassIblock} style={{width:"100%"}} />
                  <p class="imageText">IBlocks</p>
              </div>
              <div class="imageContainer">
              <img src={MassXO} style={{width:"100%"}} />
                  <p class="imageText">X-O Blocks</p>
              </div>
              <div class="imageContainer">
              <img src={bardora} style={{width:"100%"}} />
                  <p class="imageText">Bardora</p>
              </div>
              <div class="imageContainer">
              <img src={butterfly} style={{width:"100%"}} />
                  <p class="imageTextNegative">Butterfly</p>
              </div>          </div>
          <div class="column">
          <div class="imageContainer">
              <img src={horusEyeTile} style={{width:"100%"}} />
                  <p class="imageText">Horus Eye Tile</p>
              </div>
          
          <div class="imageContainer">
              <img src={lotus} style={{width:"100%"}} />
                  <p class="imageTextNegative">Lotus</p>
              </div>
              <div class="imageContainer">
              <img src={motadakhel} style={{width:"100%"}} />
                  <p class="imageText">Motadakhel</p>
              </div>
              <div class="imageContainer">
              <img src={decor} style={{width:"100%"}} />
                  <p class="imageText">Decor</p>
              </div>
              <div class="imageContainer">
              <img src={fanTile} style={{width:"100%"}} />
                  <p class="imageText">Fan Tile</p>
              </div>
              <div class="imageContainer">
              <img src={fanstasia} style={{width:"100%"}} />
                  <p class="imageText">Fantasia</p>
              </div>
              <div class="imageContainer">
              <img src={hearts} style={{width:"100%"}} />
                  <p class="imageTextNegative">Hearts</p>
              </div>
              <div class="imageContainer">
              <img src={hexagon} style={{width:"100%"}} />
                  <p class="imageTextNegative">Hexagon</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
