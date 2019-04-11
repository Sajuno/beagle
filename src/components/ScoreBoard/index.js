import React from "react";
import './index.css'

export default function ScoreBoard(props) {
  return (
    <div className="ScoreboardMainDiv">
      <h1>Scoreboard</h1>
      <div className="ScoreboardDiv">
        <div className="ScoreBoardNameDiv"> Name: {props.user.name}</div>
        <div className="ScoreBoardScoreDiv"> Score: {props.user.score}</div>
        {/* remember to make div below self closing again */}
        <div className="ScoreBoardPercentageDiv" > Here' we'll show a cool percentage counter </div>
      </div>
    </div>
  );
}
