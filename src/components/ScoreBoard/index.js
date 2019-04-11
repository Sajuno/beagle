import React from "react";

export default function ScoreBoard(props) {
  let percentageCorrect;
  console.log("state: ", props.user.averageCorrect);

  if (!props.user.averageCorrect) {
    percentageCorrect = 0;
  } else {
    percentageCorrect = props.user.averageCorrect;
  }

  return (
    <div className="ScoreboardMainDiv">
      <h1>Scoreboard</h1>
      <div className="ScoreboardDiv">
        <div className="ScoreBoardNameFieldDiv">Name:</div>
        <div className="ScoreBoardNameDiv"> {props.user.name}</div>
        <div className="ScoreBoardScoreFieldDiv">Score:</div>
        <div className="ScoreBoardScoreDiv"> {props.user.score}</div>
        <br />
        <div className="ScoreBoardPercentageDiv" />
        You scored {percentageCorrect}% correct. (Here' we'll show a cool
        percentage counter)
      </div>
    </div>
  );
}
