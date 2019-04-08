import request from 'superagent'

export function getDogs() {
    return function(dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(res => console.log(res))
    }
}