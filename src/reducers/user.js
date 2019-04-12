import { SET_USERNAME } from "../actions/user/setUserName";
import { ANSWER_GIVEN } from "../actions/user/setUserScore";
import { ANSWER_CORRECT } from "../actions/user/setUserScore";
import { SET_AVERAGE_CORRECT } from "../actions/user/setUserScore";
import { INCREMENT_CORRECT_GUESSES } from "../actions/user/incrementGuesses";
import { RESET_CORRECT_GUESSES } from "../actions/user/resetGuesses";
import { ANSWER_SHOWN } from "../actions/user/unhighlight";
import { SET_FIRSTKEY } from "../actions/user/setFirstKey";
import { SET_SECONDKEY } from "../actions/user/setSecondKey";
import { SET_THIRDKEY } from "../actions/user/setThirdKey";

export default (
  state = {
    questionsAnswered: 0,
    questionsAnsweredCorrectly: 0,
    score: 0,
    correctGuessesInARow: 0,
    highlightCorrect: false,
    firstKey: 'a',
    secondKey: 's',
    thirdKey: 'd',
    name: "John Doe"
  },
  action = {}
) => {
  switch (action.type) {
    case SET_USERNAME:
      console.log("set action", action);
      return {
        ...state,
        name: action.payload
      };
    case ANSWER_GIVEN:
      return {
        ...state,
        questionsAnswered: state.questionsAnswered + 1,
        highlightCorrect: true
      };
    case ANSWER_CORRECT:
      return {
        ...state,
        score: state.score + 50,
        highlightCorrect: false,
        questionsAnsweredCorrectly: state.questionsAnsweredCorrectly + 1
      };
    case SET_AVERAGE_CORRECT:
      return {
        ...state,
        averageCorrect: action.payload
      };
    case INCREMENT_CORRECT_GUESSES:
      return {
        ...state,
        correctGuessesInARow: state.correctGuessesInARow + 1
      };
    case RESET_CORRECT_GUESSES:
      return {
        ...state,
        correctGuessesInARow: 0
      };
    case ANSWER_SHOWN:
      return {
        ...state,
        highlightCorrect: false
      };
    case SET_FIRSTKEY:
      return {
        ...state,
        firstKey: action.payload
      };
      case SET_SECONDKEY:
      return {
        ...state,
        secondKey: action.payload
      };
      case SET_THIRDKEY:
      return {
        ...state,
        thirdKey: action.payload
      };
    default:
      return state;
  }
};
