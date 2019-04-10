import { combineReducers } from "redux";
import reducer from "./reducer";
import user from "./user";
import gameOneDogs from "./gameOneDogs";

export default combineReducers({
  reducer,
  user,
  gameOneDogs
});
