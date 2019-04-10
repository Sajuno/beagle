export const RESET_CORRECT_GUESSES = "RESET_CORRECT_GUESSES";

export function resetCorrectGuesses() {
  return {
    type: RESET_CORRECT_GUESSES,
  };
}