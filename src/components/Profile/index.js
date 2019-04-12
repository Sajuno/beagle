import React from "react";
import avatar from "./avatar-small.png";
import { connect } from "react-redux";
import { setUserName } from "../../actions/user/setUserName";
import { Progress } from "react-sweet-progress";
import './index.css'

export function Profile(props) {
  let percentageCorrect;
  let userName = "John Doe";

  // if available, read username from store
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
    "Puppyteer",
    "Dog walker",
    "Tree Barker",
    "Enthusiast",
    "Hound Freak",
    "Dog Professional",
    "Ruler of the Flock",
    "Dog Specialist",
    "Dog Whisperer",
    "Dogopedia Expert",
    "Wizard",
    "Ultra Mega End Dog Boss"
  ];

  if (props.user.score < 100) userRank = ranks[0];
  else if (props.user.score < 200) userRank = ranks[1];
  else if (props.user.score < 400) userRank = ranks[2];
  else if (props.user.score < 600) userRank = ranks[3];
  else if (props.user.score < 800) userRank = ranks[4];
  else if (props.user.score < 900) userRank = ranks[5];
  else if (props.user.score < 1000) userRank = ranks[6];
  else if (props.user.score < 1100) userRank = ranks[7];
  else if (props.user.score < 1200) userRank = ranks[8];
  else if (props.user.score < 1300) userRank = ranks[9];
  else if (props.user.score < 1400) userRank = ranks[10];
  else if (props.user.score < 1600) userRank = ranks[11];
  else if (props.user.score < 1800) userRank = ranks[12];
  else if (props.user.score < 2500) userRank = ranks[13];
  else if (props.user.score >= 2500) userRank = ranks[14];

  return (
    <>
    <div className="ProfileMainDiv">
    <div className="flexLeft">
      <h1>Profile</h1>
      <div className="ProfileAvatarDiv">
        <img className="ProfileAvatarDiv" src={avatar} alt="John Doe" />
      </div>
      <div className="ScoreBoardNameDiv">
        <h4>Name: {userName} </h4>
        <input
          type="text"
          name="title"
          className="Profile"
          value={props.inputValue}
          onChange={props.handleInput}
        />
        <button 
          className="Profile" 
          onClick={props.handleClick} 
          value="Change">
            Change it
        </button>
      </div>

      <div className="keyMapDiv">
        <h1>Change keymap:</h1>
        <input
          type="text"
          name="title"
          key="firstKey"
          className="keymap"
          onChange={props.handleFirstKeymap}
          value={props.user.firstKey}
        />
        <input
          type="text"
          name="title"
          key="secondKey"
          className="keymap"
          onChange={props.handleSecondKeymap}
          value={props.user.secondKey}
        />
        <input
          type="text"
          name="title"
          key="thirdKey"
          className="keymap"
          onChange={props.handleThirdKeymap}
          value={props.user.thirdKey}
        />
      </div>
    </div>

    <div className="flexRight">
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
      <Progress
        percent={percentageCorrect}
        theme={{
          success: {
            symbol: "🐕",
            color: "lightgreen"
          },
          active: {
            symbol: "🐩",
            color: "tomato"
          },
          default: {
            symbol: "💩",
            color: "crimson"
          }
        }}
      />
      You answered {percentageCorrect}% of questions correctly.
    </div> </div> </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { setUserName }
)(Profile);
