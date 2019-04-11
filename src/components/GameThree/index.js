import React, { Component } from 'react'
import GameOne from '../GameOne'
import GameTwo from '../GameTwo'
import {connect} from 'react-redux'
import {changeGame} from '../../actions/gamethree/changeGame'

class GameThree extends Component {
  render() {
    return (
    <>
        {
            this.props.gameThreeState
            ? <GameTwo />
            : <GameOne />
        }
    </>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        gameThreeState: state.gameThreeState
    }
}

export default connect(mapStateToProps, {changeGame})(GameThree)
