import { combineReducers } from "redux";
import user from "./user";
import gameOneDogs from './gameOneDogs'
import usedBreeds from './usedBreeds'
import dogsInUse from './dogsInUse'

export default combineReducers({ 
    user, 
    gameOneDogs, 
    usedBreeds, 
    dogsInUse 
});

