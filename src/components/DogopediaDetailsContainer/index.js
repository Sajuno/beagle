import React, { Component } from "react";
import DogopediaDetails from "../DogopediaDetails";

export default class DogopediaDetailsContainer extends Component {
  render() {
    return (
      <div>
        <DogopediaDetails props="dogType" />
      </div>
    );
  }
}
