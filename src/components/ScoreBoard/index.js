import React from "react";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
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
        <div className="ScoreBoardPercentageDiv">
          <Progress percent={percentageCorrect} 
            theme={{
              success: {
                symbol: '🐕',
                color: 'lightgreen'
              },
              active: {
                symbol: '🐩',
                color: 'tomato'
              },
              default: {
                symbol: '💩',
                color: 'crimson'
              }
            }} />
        </div>
      </div>
    </div>
  );
}
