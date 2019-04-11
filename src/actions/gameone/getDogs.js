import request from 'superagent'
import { setDogs } from './setDogs'
import { setDogsInUse } from './setDogsInUse';
import { selectRandomItems } from '../../components/GameOne/selectRandomItems'


export function getDogs() {
    return function(dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(res => {
                const doglist = Object.keys(res.body.message)
                dispatch(setDogs(doglist))
                dispatch(setDogsInUse(selectRandomItems(3, doglist)))
            })
            
    }
}
