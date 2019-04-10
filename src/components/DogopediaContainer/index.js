import React, { Component } from "react";
import DogopediaMain from "../DogopediaMain";
import request from "superagent";

export default class DogopediaContainer extends Component {
  state = { dogTypes: null };

  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        // console.log(response);
        const fullResponse = response.body.message;
        const dogTypes = Object.keys(response.body.message);
        console.log(fullResponse);

        const dogTypes2 = dogTypes.reduce((acc, current) => {
          console.log("acc", acc, "cur", fullResponse[current]);
          if (fullResponse[current].length < 1) {
            acc.push(current);
            // return current;
          }
          if (fullResponse[current].length >= 1) {
            console.log("current:", fullResponse[current]);
            acc.push(current.concat(" ", fullResponse[current][0]));
          }
          return acc;
          // }
        }, []);

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
    console.log(this.state);
    if (!this.state.dogTypes) return "Loading...";
    return (
      <div>
        <DogopediaMain dogTypes={this.state.dogTypes} />
      </div>
    );
  }
}
