export function getAverageCorrect(correct, total) {
  let percentageCorrect = 0;

  if (correct && total) percentageCorrect = (correct / total) * 100;

  return Math.round(percentageCorrect);
}
