export const ANSWER_GIVEN = "ANSWER_GIVEN";
export const ANSWER_CORRECT = "ANSWER_CORRECT";

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

export function setUserScore(correct) {
  return function(dispatch) {
    dispatch(gamePlayed());
    if (correct) {
      dispatch(correctAnswer());
    }
  };
}
