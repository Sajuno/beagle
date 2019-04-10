import { combineReducers } from "redux";
import reducer from "./reducer";
import setUser from "./setUser";
export default combineReducers({ reducer, setUser });
