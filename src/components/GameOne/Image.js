import React, { Component } from 'react'
import {shuffle} from './shuffle'

export default class Image extends Component {
    renderImage = (name, image) => {
        return (
            <div>
                <img src={image} alt={name} />
            </div>
        )
    }

    renderButtons = (correctName) => {
        const wrongNameOne = this.props.gameOneDogs[Math.floor(Math.random() * this.props.gameOneDogs.length)]
        const wrongNameTwo = this.props.gameOneDogs[Math.floor(Math.random() * this.props.gameOneDogs.length)]
        const buttons = shuffle([correctName, wrongNameOne.name, wrongNameTwo.name])
        return (
            buttons.map(button => {
                return <button>{button}</button>
            })
        )
    }

    render() {
        return (
            <div>
                {this.renderImage(this.props.breed, this.props.image)}
            </div>
        )
    }
}