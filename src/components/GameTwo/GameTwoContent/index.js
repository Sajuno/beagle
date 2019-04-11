import React, { Component } from 'react'
import request from 'superagent'
import {getRandomBreed} from '../../GameOne/GameContent/getRandomBreed'
import { renderImages } from './renderImages'
import { setUserScore } from '../../../actions/user/setUserScore'
import { unhighlight } from '../../../actions/user/unhighlight'
import './index.css';
import { connect } from 'react-redux'

class GameTwoContent extends Component {
    state = { }

    componentDidMount() {
        this.setupGameTwo()
    }

    checkAnswer = (answer, correctBreed) => {
        if(answer) {
            this.props.setUserScore(true)
            // this.props.incrementCorrectGuesses()
            // if(this.props.user.correctGuessesInARow === 5) {
            //     this.props.setDogsInUse(selectRandomItems(3, this.props.breeds))
            //     this.props.resetCorrectGuesses()
            
            alert("You are correct!")
        }
        else {
            this.props.setUserScore(false)
            // this.props.resetCorrectGuesses()
        }
    }

    handleClick = (answer, correctBreed) => {
        console.log("handleclick: ",answer, correctBreed)
        this.checkAnswer(answer, correctBreed)
        this.setupGameTwo()
    }

    setupGameTwo = () => {
        const correctBreed = getRandomBreed(this.props.breeds)
        const wrongBreed1 = this.getWrongBreed(correctBreed)
        const wrongBreed2 = this.getWrongBreed(correctBreed)
        request(`https://dog.ceo/api/breed/${correctBreed}/images/random/1`)
            .then(res => {
                this.setState({ correctImage: res.body.message[0], correctBreed })
            })
        request(`https://dog.ceo/api/breed/${wrongBreed1}/images/random/1`)
            .then(res => {
                this.setState({ wrongImage1: res.body.message[0], wrongBreed1 })
            }) 
        request(`https://dog.ceo/api/breed/${wrongBreed2}/images/random/1`)
            .then(res => {
                this.setState({ wrongImage2: res.body.message[0], wrongBreed2 })
            })
    
        
    }
    getWrongBreed = (correctBreed) => {
        let wrongBreed = getRandomBreed(this.props.breeds)
        while(wrongBreed === correctBreed) {
            wrongBreed = getRandomBreed(this.props.breeds)
        }
        return wrongBreed
    }

    alertWrong () {
        setTimeout(
            () => {
                window.requestAnimationFrame(() => {
                    alert(`Wrong! The correct image for the ${this.state.correctBreed} is:`)
                    this.props.unhighlight()
                })
            },
            0
        )
    }

    render() {
        if (this.props.highlightCorrect) {
            this.alertWrong()
        }

        if(!this.state.correctImage) return 'loading...'
        return (
            <div>
                <h1>{this.state.correctBreed}</h1>

                {
                    renderImages(
                        this.state.wrongImage1,
                        this.state.wrongImage2,
                        this.state.correctImage,
                        this.handleClick,
                        this.state.correctBreed,
                        this.props.highlightCorrect
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        highlightCorrect: state.user.highlightCorrect,
    }
}

export default connect(mapStateToProps, { 
    setUserScore,
    unhighlight
})(GameTwoContent)