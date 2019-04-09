import React, { Component } from "react";
import DogopediaDetails from "../DogopediaDetails";
import request from "superagent";

export default class DogopediaDetailsContainer extends Component {
  state = { images: null };

  componentDidMount() {
    const breed = this.props.match.params.dogType;
    console.log(breed);
    request
      .get(
        `https://dog.ceo/api/breed/${encodeURIComponent(
          breed
        )}/images/random/10`
      )
      .then(response => {
        this.updateImages(response.body.message);
      })
      .catch(console.error);
  }

  updateImages(images) {
    this.setState({
      images: images
    });
  }

  render() {
    return (
      <div>
        <DogopediaDetails match={this.props.match} images={this.state.images} />
      </div>
    );
  }
}
