import React, { Component } from "react";
import Profile from "../Profile";
import { connect } from "react-redux";
import { setUserName } from "../../actions/user/setUserName";

class ProfileContainer extends Component {
  state = { inputValue: this.props.user.name };

  handleInput(value) {
    this.setState({ inputValue: value });
  }

  handleClick = () => {
    this.props.setUserName(this.state.inputValue);
  };

  render() {
    if (!this.props.user) return "Loading...";

    return (
      <>
        <Profile
          user={this.props.user}
          inputValue={this.state.inputValue}
          handleClick={this.handleClick}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { setUserName }
)(ProfileContainer);
