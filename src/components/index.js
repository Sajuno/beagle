import React from "react";
import { connect } from "react-redux";
import LandingPage from "../LandingPage";
import { setUserName } from "../../actions/setUserScore";

export default function ScoreCounter(score) {
  
  console.log('ScoreCounter called with', score);
  


    return (
    <div className="ScoreboardMainDiv">
      <h1>Scoreboard</h1>
      <div className="ScoreboardDiv">
        Your name: {props.userData.name}
        <br />
        <br />
        Your score {props.userData.correct} of {props.userData.questionsasked}{" "}
        correct!
      </div>
    </div>
  );
}

const mapStateToProps = state => {
    return {
      id: state.id,
      title: state.title,
      albums: state.albums
    };
  };
  
  export default connect(
    mapStateToProps,
    { helloWorld, addAlbum, setAlbums, getAlbums, createAlbum }
  )(ScoreCounter;

  