import React, { Component } from "react";
import ScoreBoard from "../ScoreBoard";
import {connect} from 'react-redux'

class ScoreBoardContainer extends Component {
  render() {
    if (!this.props.user) return "Loading...";
    return (
      <>
        <ScoreBoard user={this.props.user} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(ScoreBoardContainer)