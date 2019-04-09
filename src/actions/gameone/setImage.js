export const SET_IMAGE = 'SET_IMAGE'

export function setImage(image) {
    return {
        type: SET_IMAGE,
        payload: image,
    }
}