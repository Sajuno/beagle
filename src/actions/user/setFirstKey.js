export const SET_FIRSTKEY = "SET_FIRSTKEY";

export function setFirstKey(firstKey) {
  return {
    type: SET_FIRSTKEY,
    payload: firstKey
  };
}
