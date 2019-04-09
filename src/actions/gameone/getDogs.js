import request from 'superagent'
import { setDogs } from './setDogs'
import { setImage } from './setImage'


export function getDogs(dogIndex) {
    return function(dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(res => {
                const doglist = Object.keys(res.body.message)
                dispatch(setDogs(doglist))
                return request(`https://dog.ceo/api/breed/${doglist[dogIndex]}/images/random`)
            })
            .then(res => {
                dispatch(setImage(res.body.message))
            })
    }
}
