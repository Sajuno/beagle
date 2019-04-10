import { setDogsWithPics } from './setDogsWithPics'
import request from 'superagent'


export default function getDogsWithPics() {
    const DogListWithPictures = []
    return function(dispatch) {
    request('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            const DogList2 = Object.keys(response.body.message)
            return DogList2
        })
        .then(data => {
            data.map(breed => {
                request(`https://dog.ceo/api/breed/${breed}/images/random/1`)
                    .then(response => {
                    DogListWithPictures.push({[breed]: response.body.message[0]})
                })
                return DogListWithPictures
            })
            return DogListWithPictures
        })
        .then(doglistwithpics => {
            console.log("getDogsWithPics: ", doglistwithpics)
            // dispatch(setDogsWithPics(doglistwithpics))
        })
    }
}

