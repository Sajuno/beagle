import {shuffle} from '../../GameOne/shuffle'
import React from 'react'

export function renderImages(wrongOne, wrongTwo, correct, handleClick) {
    const images = shuffle([correct, wrongOne, wrongTwo])

    return (
        images.map(img => 
            img === correct 
                ? <img value={`Good job!`} onClick={handleClick} alt="correct" src={img} /> 
                : <img value={`Sorry, that is incorrect`} onClick={handleClick} alt="wrong" src={img} />
        )
    )
}