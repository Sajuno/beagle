import React, { Component } from "react";
import { getDogs } from '../../actions/gameone/getDogs'
import { connect } from 'react-redux'
import GameTwoContent from './GameTwoContent'
import ScoreboardContainer from '../ScoreBoardContainer'
import ReturnButton from '../ReturnButton'

class GameTwo extends Component {
    componentDidMount() {
        this.props.getDogs()
    }

    render() {
        if(!this.props.dogsInUse[0]) return 'loading...'
        return (
            <div>
                <ReturnButton toPath={'../home'} pageName={'Home'}/>
                <ReturnButton toPath={'../dogopedia'} pageName={'Dogopedia'}/>
                <GameTwoContent breedsInUse={this.props.dogsInUse} breeds={this.props.gameOneDogs} />
                <ScoreboardContainer /> 
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameOneDogs: state.gameOneDogs,
        dogsInUse: state.dogsInUse
    }
}

export default connect(mapStateToProps, { getDogs })(GameTwo)