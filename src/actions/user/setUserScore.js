import { getAverageCorrect } from "./calculateAverage";

export const ANSWER_GIVEN = "ANSWER_GIVEN";
export const ANSWER_CORRECT = "ANSWER_CORRECT";
export const SET_AVERAGE_CORRECT = "SET_AVERAGE_CORRECT";

const gamePlayed = () => {
  return {
    type: ANSWER_GIVEN
  };
};

const correctAnswer = () => {
  return {
    type: ANSWER_CORRECT
  };
};

const setAverageCorrect = averageCorrect => {
  return {
    type: SET_AVERAGE_CORRECT,
    payload: averageCorrect
  };
};

export function setUserScore(correct, totalcorrect, totalquestions) {
  return function(dispatch) {
    dispatch(gamePlayed());
    dispatch(
      setAverageCorrect(getAverageCorrect(totalcorrect, totalquestions))
    );
    if (correct) {
      dispatch(correctAnswer());
    }
  };
}
