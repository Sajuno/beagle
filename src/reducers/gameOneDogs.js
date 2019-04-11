import { SET_DOGS } from '../actions/gameone/setDogs' 

const initialState = null

export default (state = initialState, action = {}) => {
    switch (action.type) {
    case SET_DOGS:
        return action.payload
    default:
        return state;
    }
};

  