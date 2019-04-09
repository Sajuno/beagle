import React, { Component } from "react";
import { getDogs } from '../../actions/gameone/getDogs'
import { connect } from 'react-redux'
import GameContent from './GameContent'


class GameOne extends Component {
    state = {gameStarted: false}

    componentDidMount() {
        this.props.getDogs()
    }

    getRandomBreed = () => {
        const randIndex = Math.floor(Math.random() * this.props.gameOneDogs.length)
        const breed = this.props.gameOneDogs[randIndex]
        return breed
    }

    render() {
        if(!this.props.gameOneDogs) return 'loading...'
        return (
            <div>
                <GameContent breed={this.getRandomBreed()} wrongBreeds={[this.getRandomBreed(), this.getRandomBreed()]} />
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameOneDogs: state.gameOneDogs
    }
}

export default connect(mapStateToProps, { getDogs })(GameOne)