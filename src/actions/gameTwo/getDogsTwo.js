import request from 'superagent'
import { setDogsTwo } from './setDogsTwo'


export function getDogsTwo() {
    return function(dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(res => {
                const doglist = Object.keys(res.body.message)
                dispatch(setDogsTwo(doglist))
            })
    }
}

