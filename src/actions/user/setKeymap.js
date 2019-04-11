export const SET_KEYMAP = "SET_KEYMAP";

export function setKeymap(keyMap) {
  return {
    type: SET_KEYMAP,
    payload: keyMap
  };
}
