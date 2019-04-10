import {shuffle} from '../shuffle'
import React from 'react'

export function renderButtons(wrongOne, wrongTwo, correct, handleClick) {
    const answers = shuffle([correct, wrongOne, wrongTwo])
    const keyMap = ['A','S','D']

    const answersWithLetters = answers.map((answer, i )=> ({ text: answer, letter: keyMap[i] }))
    return (
        answersWithLetters.map(({ text, letter }) => 
            <button
                value={
                    text === correct
                        ? text
                        : text
                }
                onClick={handleClick}
            >
                {letter}: {text}
            </button> 
        )
    )
}