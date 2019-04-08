import request from 'superagent'
import { setDogs } from './setDogs'

export function getDogs() {
    return function(dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(res => dispatch(setDogs(Object.keys(res.body.message))))
    }
}