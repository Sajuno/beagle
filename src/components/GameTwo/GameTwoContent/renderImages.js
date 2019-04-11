import {shuffle} from '../../GameOne/shuffle'
import React from 'react'

export function renderImages(wrongOne, wrongTwo, correctPicture, handleClick, correctBreed, highlightCorrect) {
    const images = shuffle([correctPicture, wrongOne, wrongTwo])
    const handleClickWrapper = isAccurate => {
        handleClick(isAccurate, correctBreed)
    }

    return (
        images.map(img => {
            const isCorrect = img === correctPicture

            return isCorrect
                ? <img
                    onClick={() => { handleClickWrapper(true) }}
                    alt="correct"
                    src={img}
                    className="game-two-image"
                    id={highlightCorrect ? 'correct-image' : null}
                /> 
                : <img
                    onClick={() => { handleClickWrapper(false) }}
                    alt="wrong"
                    className="game-two-image"
                    src={img}
                />
        })
    )
}