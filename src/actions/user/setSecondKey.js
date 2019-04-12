export const SET_SECONDKEY = "SET_SECONDKEY";

export function setSecondKey(firstKey) {
  return {
    type: SET_SECONDKEY,
    payload: firstKey
  };
}
