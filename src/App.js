// index.js Dogopedia Container

import React, { Component } from "react";
import "./App.css";
import './Fonts.css';
import { Route } from "react-router-dom";
import Dogopedia from "./components/DogopediaContainer";
import GameOne from "./components/GameOne";
import GameTwo from "./components/GameTwo";
import DogopediaDetailsContainer from "./components/DogopediaDetailsContainer";
import LandingPageContainer from "./components/LandingPageContainer";
import Profile from "./components/Profile"

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={LandingPageContainer} />
          <Route exact path="/game-one" component={GameOne} />
          <Route exact path="/game-two" component={GameTwo}/>
          <Route exact path="/dogopedia" component={Dogopedia} />
          <Route exact path="/profile" component={Profile} />
          <Route
            path="/dogopedia/:dogType"
            component={DogopediaDetailsContainer}
          />
        </main>
      </div>
    );
  }
}

export default App;
