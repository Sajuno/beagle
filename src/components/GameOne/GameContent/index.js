import React, { Component } from "react";
import request from "superagent";
import { renderButtons } from "./renderButtons";
import { getRandomBreed } from "./getRandomBreed";
import { addUsedBreed } from "../../../actions/gameone/addUsedBreed";
import { setUserScore } from "../../../actions/user/setUserScore";
import { incrementCorrectGuesses } from "../../../actions/user/incrementGuesses";
import { resetCorrectGuesses } from "../../../actions/user/resetGuesses";
import { setDogsInUse } from "../../../actions/gameone/setDogsInUse";
import { selectRandomItems } from "../selectRandomItems";
import { setHintState } from "../../../actions/gameone/setHintState";
import { changeGame } from "../../../actions/gamethree/changeGame";
import { connect } from "react-redux";
import Hint from "./Hint/Hint";
import "./index.css";
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
import '../../../modal.css'



class GameContent extends Component {
  constructor(props){
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  state = { show: false, answer: true};

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp);
    this.initQuestion();
  }

  checkAnswer = answer => {
    if (answer === this.state.breed) {
      this.setState({ answer: true})
      this.props.addUsedBreed(this.state.breed);
      this.props.setUserScore(
        true,
        this.props.user.questionsAnsweredCorrectly + 1,
        this.props.user.questionsAnswered + 1
      );
      this.props.incrementCorrectGuesses();
      if (this.props.user.correctGuessesInARow !== 0 && this.props.user.correctGuessesInARow % 5 === 0) {
        this.props.setDogsInUse(selectRandomItems(3, this.props.breeds));
        this.props.resetCorrectGuesses();
      }
    } else {
      this.setState({ answer: false})
      this.props.setUserScore(
        false,
        this.props.user.questionsAnsweredCorrectly,
        this.props.user.questionsAnswered + 1
      );
      this.props.resetCorrectGuesses();
    }
  };
  
  handleClose = () => {
    this.setState({ show: false })
    this.props.changeGame()
    this.initQuestion();
  }

  handleShow = () => {
    this.setState({ show: true });
  }

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

  getWrongBreed = correctBreed => {
    let wrongBreed = getRandomBreed(this.props.breeds);
    while (wrongBreed === correctBreed) {
      wrongBreed = getRandomBreed(this.props.breeds);
    }
    return wrongBreed;
  };

  handleClick = evt => {
    this.checkAnswer(evt.target.value);
    this.handleShow()
  };

  initQuestion = () => {
    if (this.props.showHint) this.props.setHintState();
    const breed = getRandomBreed(this.props.breedsInUse);
    request(`https://dog.ceo/api/breed/${breed}/images/random/1`).then(res =>
      this.setState({
        image: res.body.message[0],
        breed,
        wrong: [this.getWrongBreed(breed), this.getWrongBreed(breed)]
      })
    );
  };

  render() {
    if (!this.state.image) return "loading...";
    console.log('this.props test:', this.props)
    return (
      <>
        <Modal show={this.state.show} size="lg">
          <ModalHeader>
            You're answer is: {this.state.answer ? 'correct' : 'wrong'}
          </ModalHeader>
          <ModalBody>
            {this.state.answer ? `This is indeed a ${this.state.breed}` : 'Better luck next time'}
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleClose}>Next question</Button>
          </ModalFooter>
        </Modal>

        <img
          className="GameOne"
          src={this.state.image}
          alt={this.props.breed}
        />
        <div className="GameOneButtons">
          {renderButtons(
            this.state.wrong[0],
            this.state.wrong[1],
            this.state.breed,
            this.handleClick
          )}
          <Hint breed={this.state.breed} />
        </div>
      </>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        usedBreeds: state.usedBreeds,
        user: state.user,
        showHint: state.showHint,
        gameThreeState: state.gameThreeState,
    }
}

export default connect(
  mapStateToProps,
  {
    addUsedBreed,
    setUserScore,
    incrementCorrectGuesses,
    setDogsInUse,
    resetCorrectGuesses,
    setHintState,
    changeGame,
})(GameContent)

