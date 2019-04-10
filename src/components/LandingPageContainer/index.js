import React, { Component } from "react";
import LandingPage from "../LandingPage";
import { connect } from "react-redux";
import { setUserName } from "../../actions/setUserName";

class LandingPageContainer extends Component {
  state = {};

  //   updateUserName(userName) {
  //     this.setState({
  //       user: {
  //         name: userName
  //       }
  //     });
  //   }

  // askUserName() {
  //   let userName = prompt("What is your name?");
  //   if (userName == null || userName.length < 2) userName = "John Doe";
  //   return userName;
  // }

  componentDidMount() {
    this.props.setUserName("Bob");
  }

  render() {
    // if (!this.state.dogTypes) return "Loading...";
    return (
      <div>
        <LandingPage userData={this.state.userData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.userName
  };
};

export default connect(
  mapStateToProps,
  { setUserName }
)(LandingPageContainer);
