export function getAverageCorrect(correct, total) {
  let percentageCorrect = 0;

  console.log(
    "averageCorrect function reports:\n",
    "correct:",
    correct,
    "\ntotal:",
    total
  );
  if (correct && total) percentageCorrect = (correct / total) * 100;

  console.log(
    "getAverageCorrect function reports correct:\n",
    "getAverageCorrect function reports total:\n",
    "getAverageCorrect function reports percentageCorrect:",
    Math.round(percentageCorrect)
  );
  return Math.round(percentageCorrect);
}
