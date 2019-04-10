import { SET_USERNAME } from "../actions/setUserName";

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.payload;
    default:
      return state;
  }
};
