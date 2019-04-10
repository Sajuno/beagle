export const SET_DOGS_WITH_PICS = 'SET_DOGS_WITH_PICS'

export function setDogsWithPics(array) {
    return {
        type: SET_DOGS_WITH_PICS,
        payload: array,
    }
}