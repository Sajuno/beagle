import {ADD_USED_BREED} from '../actions/gameone/addUsedBreed'

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_USED_BREED:
        return [...state, action.payload]
      default:
        return state;
    }
  };
  