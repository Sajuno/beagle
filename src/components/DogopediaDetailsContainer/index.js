import React, { Component } from "react";
import DogopediaDetails from "../DogopediaDetails";
import request from "superagent";

export default class DogopediaDetailsContainer extends Component {
  state = { images: null, wikiInfo: "" };

  componentDidMount() {
    const breed = this.props.match.params.dogType;

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

    request
      .get(
        `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&formatversion=2&search=${encodeURIComponent(
          breed
        )}")`
      )
      .then(response => {
        // console.log(".then is reporting: ", response.body[2][0]);
        // this.updateWikiInfo(response.body[2][0]);
        // console.log(".then is reporting: ", response.body);
        this.updateWikiInfo(response.body[2][0]);
      })
      .catch(console.error);
  }

  updateImages(images) {
    this.setState({
      images: images
    });
  }

  updateWikiInfo(wikiInfo) {
    this.setState({
      wikiInfo: wikiInfo
    });
  }

  render() {
    return (
      <div>
        <DogopediaDetails
          match={this.props.match}
          images={this.state.images}
          wikiInfo={this.state.wikiInfo}
        />
      </div>
    );
  }
}
