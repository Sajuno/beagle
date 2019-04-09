import React, { Component } from 'react'
import request from 'superagent'
import {shuffle} from './shuffle'

export default class GameContent extends Component {
    state = {}

    componentDidMount() {
        const breed = this.props.breed
        request(`https://dog.ceo/api/breed/${breed}/images/random/1`)
            .then(res => this.setState({image: res.body.message[0]}))   
    }

    handleClick = (evt) => {
        alert(evt.target.value)
    }

    renderButtons = () => {
        const wrongOne = this.props.wrongBreeds[0]
        const wrongTwo = this.props.wrongBreeds[1]
        const correct = this.props.breed
        const buttons = shuffle([correct, wrongOne, wrongTwo])

        return (
            buttons.map(button => 
                button === correct 
                    ? <button value={`Good job! It was a ${button}`} onClick={this.handleClick}>{button}</button> 
                    : <button value={`Sorry, it was not a ${button}`} onClick={this.handleClick}>{button}</button>
            )
        )
    }

    render() {
        if(!this.state.image) return 'loading...'
        return (
            <>
                <img src={this.state.image} alt={this.props.breed}/>
                {this.renderButtons()}
            </>
        )
    }
}
