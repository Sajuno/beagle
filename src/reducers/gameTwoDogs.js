import { SET_DOGS_TWO } from '../actions/gameTwo/setDogsTwo' 

const initialState = null

export default (state = initialState, action = {}) => {
    switch (action.type) {
    case SET_DOGS_TWO:
        return action.payload
    default:
        return state;
    }
};