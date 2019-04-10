export const ADD_USED_BREED = 'ADD_USED_BREED'

export function addUsedBreed(breed) {
    return {
        type: ADD_USED_BREED,
        payload: breed,
    }
}