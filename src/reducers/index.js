import { combineReducers } from "redux";
import reducer from "./reducer";
import setUser from "./setUser";
import gameOneDogs from './gameOneDogs'

export default combineReducers({ reducer, setUser, gameOneDogs });

