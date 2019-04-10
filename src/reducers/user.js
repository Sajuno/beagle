import { SET_USERNAME } from "../actions/user/setUserName";
import { ANSWER_GIVEN } from "../actions/user/setUserScore";
import { ANSWER_CORRECT } from "../actions/user/setUserScore";

export default (state = { questionsAnswered: 0, score: 0 }, action = {}) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        name: action.payload
      };
    case ANSWER_GIVEN:
      return {
        ...state,
        questionsAnswered: state.questionsAnswered + 1
      };
    case ANSWER_CORRECT:
      return {
        ...state,
        score: state.score + 50
      };
    default:
      return state;
  }
};
