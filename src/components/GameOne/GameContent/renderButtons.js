import {shuffle} from '../shuffle'
import React from 'react'

export function renderButtons(wrongOne, wrongTwo, correct, handleClick) {
    const buttons = shuffle([correct, wrongOne, wrongTwo])

    return (
        buttons.map(button => 
            button === correct 
                ? <button value={`Good job! It was a ${button}`} onClick={handleClick}>{button}</button> 
                : <button value={`Sorry, it was not a ${button}`} onClick={handleClick}>{button}</button>
        )
    )
}