import React, { Component } from 'react'
import request from 'superagent'
import {getRandomBreed} from '../../GameOne/GameContent/getRandomBreed'
import { renderImages } from './renderImages'
import { shuffle } from '../../GameOne/shuffle'

export default class GameTwoContent extends Component {
    state = { }

    componentDidMount() {
        this.setupGameTwo()
    }

    handleClick = (evt) => {
        alert(evt.target.value)
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



    render() {
        if(!this.state.correctImage) return 'loading...'
        return (
            <>
                <p>{this.state.correctBreed}</p>
                {/* {shuffle([this.state.correctImage,this.state.wrongImage1,this.state.wrongImage2]).map(image => {
                    return <img src={image} alt=""/>
                })} */}
                {renderImages(this.state.wrongImage1, this.state.wrongImage2, this.state.correctImage, this.handleClick)}
            </>
        )
    }
}
