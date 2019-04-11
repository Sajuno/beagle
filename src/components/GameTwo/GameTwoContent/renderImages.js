import {shuffle} from '../../GameOne/shuffle'
import React from 'react'

export function renderImages(wrongOne, wrongTwo, correctPicture, handleClick, correctBreed, highlightCorrect) {
    console.log('correctPicture test:', correctPicture)
    console.log('correctBreed test:', correctBreed)
    const images = shuffle([correctPicture, wrongOne, wrongTwo])

    console.log('images test:', images)

    const handleClickWrapper = isAccurate => {
        console.log('isAccurate test:', isAccurate)

        handleClick(isAccurate, correctBreed)
    }

    return (
        images.map(img => {
            console.log('img test:', img)
            const isCorrect = img === correctPicture
            console.log('isCorrect test:', isCorrect)

            return isCorrect
                ? <img
                    onClick={() => { handleClickWrapper(true) }}
                    alt="correct"
                    src={img}
                    className={highlightCorrect ? 'correct-image' : null}
                /> 
                : <img
                    onClick={() => { handleClickWrapper(false) }}
                    alt="wrong"
                    src={img}
                />
        })
    )
}