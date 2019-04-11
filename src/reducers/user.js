import { SET_USERNAME } from "../actions/user/setUserName";
import { ANSWER_GIVEN } from "../actions/user/setUserScore";
import { ANSWER_CORRECT } from "../actions/user/setUserScore";
import { SET_AVERAGE_CORRECT } from "../actions/user/setUserScore";
import { INCREMENT_CORRECT_GUESSES } from '../actions/user/incrementGuesses'
import { RESET_CORRECT_GUESSES } from '../actions/user/resetGuesses'
import { ANSWER_SHOWN } from '../actions/user/unhighlight'


export default (
  state = {
    questionsAnswered: 0,
    questionsAnsweredCorrectly: 0,
    score: 0,
    correctGuessesInARow: 0,
    highlightCorrect: false,
  },
  action = {}
) => {
  switch (action.type) {
    case SET_USERNAME:
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
        questionsAnsweredCorrectly: state.questionsAnsweredCorrectly + 1,
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
    default:
      return state;
  }
};
