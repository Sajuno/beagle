import {shuffle} from '../../GameOne/shuffle'
import React from 'react'

export function renderImages(wrongOne, wrongTwo, correctPicture, handleClick, correctBreed) {
    const images = shuffle([correctPicture, wrongOne, wrongTwo])
    const handleClickWrapper = isAccurate => {
        handleClick(isAccurate, correctBreed)
    }
    const keyMap = ['A','S','D']

    const answersWithLetters = images.map((answer, i ) => ({ img: answer, letter: keyMap[i] }))


    return (
        answersWithLetters.map(({ img, letter }) => {
            const isCorrect = img === correctPicture
            return isCorrect
                ? <img
                    onClick={() => { handleClickWrapper(true) }}
                    alt="dogpicture"
                    id={letter}
                    src={img}
                    className="game-two-image"
                /> 
                : <img
                    onClick={() => { handleClickWrapper(false) }}
                    alt="dogpicture"
                    id={letter}
                    className="game-two-image"
                    src={img}
                />
        })
    )
}