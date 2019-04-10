export const SET_DOGS_IN_USE = 'SET_DOGS_IN_USE'

export function setDogsInUse(dogs) {
    return {
        type: SET_DOGS_IN_USE,
        payload: dogs,
    }
}