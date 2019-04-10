// index.js Dogopedia Container

import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Dogopedia from "./components/DogopediaContainer";
import GameOne from "./components/GameOne";
import GameTwo from "./components/GameTwo/GameTwoContainer"
import DogopediaDetailsContainer from "./components/DogopediaDetailsContainer";
import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/game-one" component={GameOne} />
          <Route exact path="/game-two" component={GameTwo}/>
          <Route exact path="/dogopedia" component={Dogopedia} />
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
