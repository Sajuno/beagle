import { combineReducers } from "redux";

export default combineReducers({ reducer, gameOneDogs, gameTwoDogs });

import user from "./user";
import gameOneDogs from './gameOneDogs'
import usedBreeds from './usedBreeds'
import dogsInUse from './dogsInUse'
import gameTwoDogs from './gameTwoDogs';

export default combineReducers({ 
    user, 
    gameOneDogs, 
    gameTwoDogs,
    usedBreeds, 
    dogsInUse 
});

