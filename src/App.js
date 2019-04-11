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
import GameThree from './components/GameThree'
import IntroPage from './components/IntroPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/home" component={LandingPageContainer} />
          <Route exact path="/game-one" component={GameOne} />
          <Route exact path="/game-two" component={GameTwo}/>
          <Route exact path="/dogopedia" component={Dogopedia} />
          <Route
            path="/dogopedia/:dogType"
            component={DogopediaDetailsContainer}
          />
          <Route exact path ="/game-three" component={GameThree} />
          <Route exact path ="/" component={IntroPage} />
        </main>
      </div>
    );
  }
}

export default App;
