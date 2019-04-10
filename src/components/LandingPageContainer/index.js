import React, { Component } from "react";
import LandingPage from "../LandingPage";
import { connect } from "react-redux";
import { setUserName } from "../../actions/user/setUserName";

class LandingPageContainer extends Component {
  state = {};

  askUserName() {
    let userName = prompt("What is your name?");
    if (userName == null || userName.length < 2) userName = "John Doe";
    return userName;
  }

  componentDidMount() {
    // wait 1 second with asking username so page can render
    setTimeout(() => this.props.setUserName(this.askUserName()), 1000);
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
