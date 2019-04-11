export const ANSWER_SHOWN = "ANSWER_SHOWN";

const answerShown = () => {
  return {
    type: ANSWER_SHOWN
  }
}

export function unhighlight() {
  return function(dispatch) {
    dispatch(answerShown())
  }
}
