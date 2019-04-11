export function getRandomBreed(breeds) {
    const randIndex = Math.floor(Math.random() * breeds.length)
    const breed = breeds[randIndex]
    return breed
}