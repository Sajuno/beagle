import React from "react";
import avatar from "./avatar-small.png";

export default function Profile(props) {
  let percentageCorrect;
  let userName = "John Doe";

  if (props.user.name) userName = props.user.name;

  if (!props.user.averageCorrect) {
    percentageCorrect = 0;
  } else {
    percentageCorrect = props.user.averageCorrect;
  }
  
  // calculate user's rank
  let userRank = "Newbie";
  const ranks = [
    "Newbie",
    "Apprentice",
    "Dog lover",
    "Enthusiast",
    "Dog Whisperer",
    "Wizard"
  ];

  if (props.user.score < 100) userRank = ranks[0];
  else if (props.user.score < 200) userRank = ranks[1];
  else if (props.user.score < 400) userRank = ranks[2];
  else if (props.user.score < 600) userRank = ranks[3];
  else if (props.user.score < 800) userRank = ranks[4];
  else if (props.user.score >= 800) userRank = ranks[5];

  return (
    <div className="ProfileMainDiv">
      <h1>Profile</h1>
      <div className="ProfileAvatarDiv">
        <img src={avatar} alt="John Doe" />
      </div>
      <div className="ScoreBoardNameDiv"> Name: {userName}</div>
      <div className="ScoreBoardScoreDiv"> Score: {props.user.score}</div>
      <div className="ScoreBoardScoreDiv">
        Rank: {userRank}
        <br />
        <br />
        Questions answered: {props.user.questionsAnswered}
        <br />
        Questions correct: {props.user.questionsAnsweredCorrectly}
        <br />
      </div>
      <div className="ScoreBoardPercentageDiv" />
      Percentage correct:
      <br />
      <br />
      INSERT ALBERT'S PROGRESS BAR HERE
    </div>
  );
}
