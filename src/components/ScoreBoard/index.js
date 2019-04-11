import React from "react";
import './index.css'
import {useSpring, animated} from 'react-spring'

export default function ScoreBoard(props) {
  let percentageCorrect;

  if (!props.user.averageCorrect) {
    percentageCorrect = 0;
  } else {
    percentageCorrect = props.user.averageCorrect;
  }

  const springProp = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <div className="ScoreboardMainDiv">
      <h1>Scoreboard</h1>

      <animated.div style={springProp}>I will fade in</animated.div>

      <div className="ScoreboardDiv">
        <div className="ScoreBoardNameDiv"> Name: {props.user.name}</div>
        <div className="ScoreBoardScoreDiv"> Score: {props.user.score}</div>
        <div className="ScoreBoardPercentageDiv" />
        You scored {percentageCorrect}% correct. (Here' we'll show a cool
        percentage counter)
      </div>
    </div>
  );
}
