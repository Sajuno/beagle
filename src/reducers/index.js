import { combineReducers } from "redux";
import reducer from "./reducer";
import gameOneDogs from './gameOneDogs'

export default combineReducers({ reducer, gameOneDogs });
