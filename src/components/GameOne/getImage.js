import request from 'superagent'

export function getImage(breed) {
    request(`https://dog.ceo/api/breed/${breed}/images/random/1`)
}