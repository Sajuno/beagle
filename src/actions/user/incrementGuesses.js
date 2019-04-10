export const INCREMENT_CORRECT_GUESSES = "INCREMENT_CORRECT_GUESSES";

export function incrementCorrectGuesses() {
  return {
    type: INCREMENT_CORRECT_GUESSES,
  };
}