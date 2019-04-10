import { combineReducers } from "redux";
import reducer from "./reducer";
import gameOneDogs from './gameOneDogs';
import gameTwoDogs from './gameTwoDogs';


export default combineReducers({ reducer, gameOneDogs, gameTwoDogs });
