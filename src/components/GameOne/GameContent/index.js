import React, { Component } from 'react'
import request from 'superagent'
import {renderButtons} from './renderButtons'
import {getRandomBreed} from './getRandomBreed'
import './index.css'

export default class GameContent extends Component {
    state = { }

    componentDidMount() {
        this.initQuestion()
        window.addEventListener('keyup', this.handleKeyUp)
    }

    handleKeyUp(event) {
        switch(event.key) {
            case 'a':
                console.log(event.key)
                break
            case 's':
                console.log(event.key)
                break
            case 'd':
                console.log(event.key)
                break

            default:
            break
        }
      }

    handleClick = (evt) => {
        alert(evt.target.value)
        this.initQuestion()
    }

    initQuestion = () => {
        const breed = getRandomBreed(this.props.breeds)
        request(`https://dog.ceo/api/breed/${breed}/images/random/1`)
            .then(res => this.setState({image: res.body.message[0], 
                breed, 
                wrong: [
                    getRandomBreed(this.props.breeds), 
                    getRandomBreed(this.props.breeds)
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
