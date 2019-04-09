import { SET_DOGS } from '../actions/gameone/setDogs' 
import { SET_IMAGE} from '../actions/gameone/setImage'

const initialState = null

export default (state = initialState, action = {}) => {
    switch (action.type) {
    case SET_DOGS:
        return action.payload
    case SET_IMAGE:
        return state.map(breed => {
            const checkBreed = new RegExp("/" + breed + "/")
            if(action.payload[0].match(checkBreed)) {
                return {name: breed, image: action.payload[0]}
            } else {
                return breed
            }
        }
        )
        

    default:
        return state;
    }
};
  