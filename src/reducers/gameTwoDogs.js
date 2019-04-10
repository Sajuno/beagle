import { SET_DOGS_WITH_PICS } from '../actions/gameTwo/setDogsWithPics' 

const initialState = null

export default (state = initialState, action = {}) => {
    switch (action.type) {
    case SET_DOGS_WITH_PICS:
        return action.payload
    default:
        return state;
    }
};