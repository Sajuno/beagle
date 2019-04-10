import React from "react";

export default function ScoreBoard(props) {
  return (
    <div className="ScoreboardMainDiv">
      <h1>Scoreboard</h1>
      <div className="ScoreboardDiv">
        <div className="ScoreBoardNameFieldDiv">Name:</div>
        <div className="ScoreBoardNameDiv"> {props.user.name}</div>
        <br />
        <div className="ScoreBoardScoreFieldDiv">Score:</div>
        <br />
        <div className="ScoreBoardScoreDiv"> {props.user.score}</div>
        <br />
        <div className="ScoreBoardPercentageBar" datavalue="85" />
      </div>
    </div>
  );
}
