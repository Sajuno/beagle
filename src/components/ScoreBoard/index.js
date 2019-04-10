import React from "react";

export default function ScoreBoard(props) {
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
