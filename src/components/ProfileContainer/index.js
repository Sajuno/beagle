import React, { Component } from "react";
import Profile from "../Profile";
import { connect } from "react-redux";
import { setUserName } from "../../actions/user/setUserName";
import ReturnButton from "../ReturnButton";

class ProfileContainer extends Component {
  state = { inputValue: this.props.user.name };

  handleInput(event) {
    const { value } = event.target;
    this.setState({ inputValue: value });
  }

  handleClick = () => {
    const { inputValue } = this.state;
    this.props.setUserName(this.state.inputValue);
  };

  render() {
    if (!this.props.user) return "Loading...";

    return (
      <>
        <ReturnButton toPath={"../home"} pageName={"Home"} />
        <ReturnButton toPath={"../dogopedia"} pageName={"Dogopedia"} />
        <ReturnButton toPath={"../game-one"} pageName={"Game One"} />
        <ReturnButton toPath={"../game-two"} pageName={"Game Two"} />
        <ReturnButton toPath={"../game-three"} pageName={"Game Three"} />
        <Profile
          user={this.props.user}
          inputValue={this.state.inputValue}
          handleClick={this.handleClick}
          handleInput={event => this.handleInput(event)}
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
