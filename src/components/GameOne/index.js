import React, { Component } from "react";
import { getDogs } from '../../actions/gameone/getDogs'
import { setDogsInUse } from '../../actions/gameone/setDogsInUse'
import { connect } from 'react-redux'
import GameContent from './GameContent'


class GameOne extends Component {
    componentDidMount() {
        this.props.getDogs()
    }

    render() {
        if(!this.props.dogsInUse[0]) return 'loading...'
        return (
            <div class="GameOne">
                <GameContent breedsInUse={this.props.dogsInUse} breeds={this.props.gameOneDogs}/>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogsInUse: state.dogsInUse,
        gameOneDogs: state.gameOneDogs
    }
}

export default connect(mapStateToProps, { getDogs, setDogsInUse })(GameOne)