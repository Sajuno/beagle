import React, { Component } from "react";
import Profile from "../Profile";
import { connect } from "react-redux";

class ProfileContainer extends Component {
  render() {
    if (!this.props.user) return "Loading...";
    return (
      <>
        <Profile user={this.props.user} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ProfileContainer);
