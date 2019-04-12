export const SET_DOGS_TWO = 'SET_DOGS'

export function setDogsTwo(dogs) {
    return {
        type: SET_DOGS_TWO,
        payload: dogs,
    }
}