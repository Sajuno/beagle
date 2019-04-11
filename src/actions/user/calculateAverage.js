export function getAverageCorrect(correct, total) {
  let percentageCorrect = 0;

  if (correct && total) percentageCorrect = (correct / total) * 100;

  console.log(
    "getAverageCorrect function reports correct:\n",
    "getAverageCorrect function reports total:\n",
    "getAverageCorrect function reports percentageCorrect:",
    Math.random(percentageCorrect)
  );
  return Math.random(percentageCorrect);
}
