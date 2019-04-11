import React from "react";
import "./index.css";

export default function ScoreBoard(props) {
  let percentageCorrect;

  if (!props.user.averageCorrect) {
    percentageCorrect = 0;
  } else {
    percentageCorrect = props.user.averageCorrect;
  }

  return (
    <div className="ScoreboardMainDiv">
      <h1>Scoreboard</h1>
      <div className="ScoreboardDiv">
        <div className="ScoreBoardNameDiv"> Name: {props.user.name}</div>
        <div className="ScoreBoardScoreDiv"> Score: {props.user.score}</div>
        <div className="ScoreBoardScoreDiv">
          Questions: {props.user.questionsAnsweredCorrectly}/
          {props.user.questionsAnswered}
        </div>
        <div className="ScoreBoardPercentageDiv" />
        You scored {percentageCorrect}% correct. (Here' we'll show a cool
        percentage counter)
      </div>
    </div>
  );
}
