import {shuffle} from '../shuffle'
import React from 'react'
import { connect } from "react-redux";


export function renderButtons(wrongOne, wrongTwo, correct, handleClick, user) {
    const answers = shuffle([correct, wrongOne, wrongTwo])		     
    const keyMap = [user.firstKey,user.secondKey,user.thirdKey]

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
                id={letter}
                className="GameOne"
            >
                <p className='letter'>{letter}</p> {text}
            </button>
        )
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(renderButtons)
  