import { SET_DOGS_IN_USE } from '../actions/gameone/setDogsInUse' 

const initialState = []

export default (state = initialState, action = {}) => {
    switch (action.type) {
    case SET_DOGS_IN_USE:
        return [...state, ...action.payload]
    default:
        return state;
    }
};

  