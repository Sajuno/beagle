import request from 'superagent'
import { setImage } from './setImage'


export function getImage(breed) {
    return function(dispatch) {
        request(`https://dog.ceo/api/breed/${breed}/images/random/1`)
            .then(res => dispatch(setImage(res.body.message)))
    }
}

//Deprecated