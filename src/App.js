// index.js Dogopedia Container

import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Dogopedia from "./components/DogopediaContainer";
import GameOne from "./components/GameOneContainer";
import DogopediaDetails from "./components/DogopediaDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/game-one" component={GameOne} />
          <Route exact path="/dogopedia" component={Dogopedia} />
          <Route path="/dogopedia/:dogType" component={DogopediaDetails} />
        </main>
      </div>
    );
  }
}

export default App;
