import React, { Component } from 'react'
import request from 'superagent'
import {renderButtons} from './renderButtons'
import {getRandomBreed} from './getRandomBreed'
import {addUsedBreed} from '../../../actions/gameone/addUsedBreed'
import {setUserScore} from '../../../actions/user/setUserScore'
import {incrementCorrectGuesses} from '../../../actions/user/incrementGuesses'
import {resetCorrectGuesses} from '../../../actions/user/resetGuesses'
import {setDogsInUse} from '../../../actions/gameone/setDogsInUse'
import {selectRandomItems} from '../selectRandomItems'
import {connect} from 'react-redux'
import './index.css'

class GameContent extends Component {
    state = { }

    componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp)
        this.initQuestion()
    }

    checkAnswer = (answer) => {
        if(answer === this.state.breed) {
            this.props.setUserScore(true)
            this.props.incrementCorrectGuesses()
            if(this.props.user.correctGuessesInARow === 5) {
                this.props.setDogsInUse(selectRandomItems(3, this.props.breeds))
                this.props.resetCorrectGuesses()
            }
            alert("You are correct!")
        } else {
            this.props.setUserScore(false)
            this.props.resetCorrectGuesses()
            alert(`You are wrong, the right answer was ${this.state.breed}`)
        }
    }

    handleKeyUp(event) {		
        switch(event.key) {		
            case 'a':		
                document.getElementById('A').click()		
                break		
            case 's':		
                document.getElementById('S').click()		
                break		
            case 'd':		
                document.getElementById('D').click()		
                break		

             default:		
                break		
        }		
      }		


    getWrongBreed = (correctBreed) => {
        let wrongBreed = getRandomBreed(this.props.breeds)
        while(wrongBreed === correctBreed) {
            wrongBreed = getRandomBreed(this.props.breeds)
        }
        return wrongBreed
    }

    handleClick = (evt) => {
        this.checkAnswer(evt.target.value)
        this.initQuestion()
    }

    initQuestion = () => {
        const breed = getRandomBreed(this.props.breedsInUse)
        this.props.addUsedBreed(breed)
        request(`https://dog.ceo/api/breed/${breed}/images/random/1`)
            .then(res => this.setState({
                image: res.body.message[0], 
                breed, 
                wrong: [
                    this.getWrongBreed(breed), 
                    this.getWrongBreed(breed)
                ]
            }))   
    }

    render() {
        if(!this.state.image) return 'loading...'
        return (
            <>
                <img class="GameOne" src={this.state.image} alt={this.props.breed}/>
                    <div class="GameOneButtons">
                        {renderButtons(this.state.wrong[0], this.state.wrong[1], this.state.breed, this.handleClick)}
                    </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usedBreeds: state.usedBreeds,
        user: state.user
    }
}

export default connect(mapStateToProps, { 
    addUsedBreed, 
    setUserScore, 
    incrementCorrectGuesses, 
    setDogsInUse, 
    resetCorrectGuesses 
})(GameContent)
