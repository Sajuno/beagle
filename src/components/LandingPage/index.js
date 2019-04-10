import React, { Component } from "react";
import "./LandingPage.css";
import ManyDogs from "../../pictures/many-dogs.jpg";
import DogopediaPicture from "../../pictures/dogopedia-logo.png";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainHeaderDiv">Welcome to the BEAGL Dog page.</div>

        <div className="bigFlexBox">
          <div className="flexBoxLeft" />
          <div className="dogopediaLeft">
            <Link to="/dogopedia">
              <img id="ManyDogs" src={ManyDogs} alt="Many dogs" />
            </Link>
            <img src={DogopediaPicture} alt="Dogopedia" />
            <h1>Practice your dog knowledge!</h1>
          </div>
          <div className="flexBoxRight">
            <div className="gameOneMainDiv">
              This is where the invitation to play Game 1 will be.{" "}
            </div>
            <div className="gameTwoMainDiv">
              This is where the invitation to play Game 2 will be.{" "}
            </div>
            <div className="gameThreeMainDiv">
              This is where the invitation to play Game 3 will be.
            </div>
          </div>
        </div>
        <footer class="footer">&copy; 2019 Beagl &#9825; Codaisseur</footer>
      </div>
    );
  }
}
