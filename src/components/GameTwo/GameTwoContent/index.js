import React, { Component } from "react";
import request from "superagent";
import { getRandomBreed } from "../../GameOne/GameContent/getRandomBreed";
import { renderImages } from "./renderImages";
import { setUserScore } from "../../../actions/user/setUserScore";
import "./index.css";
import { connect } from "react-redux";
import { addUsedBreed } from "../../../actions/gameone/addUsedBreed";
import { incrementCorrectGuesses } from "../../../actions/user/incrementGuesses";
import { resetCorrectGuesses } from "../../../actions/user/resetGuesses";
import { setDogsInUse } from "../../../actions/gameone/setDogsInUse";
import { selectRandomItems } from "../../GameOne/selectRandomItems";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import "../../../modal.css";
import { changeGame } from "../../../actions/gamethree/changeGame";

class GameTwoContent extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  state = { show: false, answer: true };

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp);
    this.setupGameTwo();
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp);
  }

  checkAnswer = (answer, correctBreed) => {
    if (answer) {
      this.props.setUserScore(
        true,
        this.props.user.questionsAnsweredCorrectly + 1,
        this.props.user.questionsAnswered + 1
      );
      this.props.incrementCorrectGuesses();
      if (this.props.user.correctGuessesInARow === 5) {
        this.props.setDogsInUse(selectRandomItems(3, this.props.breeds));
        this.props.resetCorrectGuesses();
      }
    } else {
      this.props.setUserScore(
        false,
        this.props.user.questionsAnsweredCorrectly,
        this.props.user.questionsAnswered + 1
      );
      this.props.resetCorrectGuesses();
    }
    this.handleShow();
  };

  handleKeyUp(event) {
    switch (event.key) {
      case this.props.user.keyMap[0]:
        document.getElementById("A").click();
        break;
      case this.props.user.keyMap[1]:
        document.getElementById("S").click();
        break;
      case this.props.user.keyMap[2]:
        document.getElementById("D").click();
        break;
      default:
        break;
    }
  }

  handleClick = (answer, correctBreed) => {
    this.setState({ answer });
    this.checkAnswer(answer, correctBreed);
  };

  setupGameTwo = () => {
    const correctBreed = getRandomBreed(this.props.breedsInUse);
    const wrongBreed1 = this.getWrongBreed(correctBreed);
    const wrongBreed2 = this.getWrongBreed(correctBreed);
    request(`https://dog.ceo/api/breed/${correctBreed}/images/random/1`).then(
      res => {
        this.setState({ correctImage: res.body.message[0], correctBreed });
      }
    );
    request(`https://dog.ceo/api/breed/${wrongBreed1}/images/random/1`).then(
      res => {
        this.setState({ wrongImage1: res.body.message[0], wrongBreed1 });
      }
    );
    request(`https://dog.ceo/api/breed/${wrongBreed2}/images/random/1`).then(
      res => {
        this.setState({ wrongImage2: res.body.message[0], wrongBreed2 });
      }
    );
  };
  getWrongBreed = correctBreed => {
    let wrongBreed = getRandomBreed(this.props.breeds);
    while (wrongBreed === correctBreed) {
      wrongBreed = getRandomBreed(this.props.breeds);
    }
    return wrongBreed;
  };

  handleClose = () => {
    this.setState({ show: false });
    this.props.changeGame();
    this.setupGameTwo();
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    if (!this.state.correctImage) return "loading...";
    return (
      <>
        <div className="GameTwoDIV">
          {renderImages(
            this.state.wrongImage1,
            this.state.wrongImage2,
            this.state.correctImage,
            this.handleClick,
            this.state.correctBreed
          )}

          <Modal show={this.state.show} size="lg">
            <ModalHeader>
              Your answer is: {this.state.answer ? "correct" : "wrong"}
            </ModalHeader>
            <ModalBody>
              {this.state.answer
                ? `This is indeed an ${this.state.correctBreed}!`
                : "This was the correct answer:"}
              <br />
              <img
                src={this.state.correctImage}
                className="game-two-image"
                alt="Loading.."
              />
            </ModalBody>
            <ModalFooter>
              <Button className="modal-button" onClick={this.handleClose}>
                Next question
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div className="keyMapDivs">
          <div className="keyMapLegend"> {this.props.user.keyMap[0]} </div>
          <div className="keyMapLegend"> {this.props.user.keyMap[1]} </div>
          <div className="keyMapLegend"> {this.props.user.keyMap[2]} </div>
        </div>
        <div className="GameTwoh2">
          <h2>
            Click on the photo matching the {this.state.correctBreed} breed
          </h2>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    highlightCorrect: state.user.highlightCorrect,
    usedBreeds: state.usedBreeds,
    user: state.user,
    showHint: state.showHint
  };
};

export default connect(
  mapStateToProps,
  {
    setUserScore,
    addUsedBreed,
    incrementCorrectGuesses,
    setDogsInUse,
    resetCorrectGuesses,
    changeGame
  }
)(GameTwoContent);
