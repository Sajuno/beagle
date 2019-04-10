import React, { Component } from "react";
import ScoreBoard from "./ScoreBoard";

export default class ScoreBoardContainer extends Component {
  state = { dogTypes: null };

  // updateState(dogTypes) {
  //   this.setState({
  //     //   dogTypes: dogTypes
  //   });
  // }

  componentDidMount() {}

  render() {
    if (!this.state.dogTypes) return "Loading...";
    return (
      <div>
        <ScoreBoard userData={this.state.userData} />
      </div>
    );
  }
}
