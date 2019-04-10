import React, { Component } from 'react'
import request from 'superagent'
import {renderButtons} from './renderButtons'
import {getRandomBreed} from './getRandomBreed'
import {addUsedBreed} from '../../../actions/gameone/addUsedBreed'
import {connect} from 'react-redux'

class GameContent extends Component {
    state = { }

    componentDidMount() {
        this.initQuestion()
    }

    checkAnswer = (answer) => {
        if(answer === this.state.breed) {
            alert("You are correct!")
        } else {
            alert(`You are wrong, the right answer was ${this.state.breed}`)
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
                <img src={this.state.image} alt={this.props.breed}/>
                {renderButtons(this.state.wrong[0], this.state.wrong[1], this.state.breed, this.handleClick)}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usedBreeds: state.usedBreeds
    }
}

export default connect(mapStateToProps, { addUsedBreed })(GameContent)
