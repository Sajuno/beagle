import React, { Component } from "react";
import DogopediaMain from "../DogopediaMain";
import request from "superagent";

export default class DogopediaContainer extends Component {
  state = { dogTypes: null };

  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        const dogTypes = Object.keys(response.body.message);
        this.updateDogTypes(dogTypes);
      })
      .catch(console.error);
  }

  updateDogTypes(dogTypes) {
    this.setState({
      dogTypes: dogTypes
    });
  }

  render() {
    if (!this.state.dogTypes) return "Loading...";
    return (
      <div>
        <DogopediaMain dogTypes={this.state.dogTypes} />
      </div>
    );
  }
}
