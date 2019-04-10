import React, { Component } from 'react'
import getRandomBreed from '../../GameOne/GameContent/getRandomBreed'
import getDogsWithPics from '../../../actions/gameTwo/getDogsWithPics'
import { connect } from 'react-redux'
import gameTwoDogs from '../../../reducers/gameTwoDogs';

class GameTwoContainer extends Component {
  componentDidMount = () => {
      this.props.getDogsWithPics()
  }
  
    render() {
        return (
            <div>
            {}
            
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { gameTwoDogs: state.gameTwoDogs }
}

export default connect(mapStateToProps, { getDogsWithPics })(GameTwoContainer)
