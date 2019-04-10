export const SET_USERNAME = "SET_USERNAME";

export function setUserName(userName) {
  return {
    type: SET_USERNAME,
    payload: userName
  };
}
