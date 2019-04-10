import { combineReducers } from "redux";
import setUser from "./setUser";
import gameOneDogs from './gameOneDogs'
import usedBreeds from './usedBreeds'
import dogsInUse from './dogsInUse'

export default combineReducers({ 
    setUser, 
    gameOneDogs, 
    usedBreeds, 
    dogsInUse 
});

