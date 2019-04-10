export const SET_DOGS = 'SET_DOGS'

export function setDogs(dogs) {
    return {
        type: SET_DOGS,
        payload: dogs,
    }
}