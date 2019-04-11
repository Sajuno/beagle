import { combineReducers } from "redux";

import user from "./user";
import gameOneDogs from './gameOneDogs'
import usedBreeds from './usedBreeds'
import dogsInUse from './dogsInUse'
import gameTwoDogs from './gameTwoDogs';
import showHint from './showHint'
import gameThreeState from './gameThreeState'

console.log("showHint test:", showHint)

export default combineReducers({ 
    user, 
    gameOneDogs, 
    gameTwoDogs,
    usedBreeds, 
    dogsInUse,
    showHint,
    gameThreeState
});

