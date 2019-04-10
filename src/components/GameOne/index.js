import React, { Component } from "react";
import { getDogs } from '../../actions/gameone/getDogs'
import { connect } from 'react-redux'
import GameContent from './GameContent'


class GameOne extends Component {
    componentDidMount() {
        this.props.getDogs()
    }

    render() {
        if(!this.props.gameOneDogs) return 'loading...'
        return (
            <div class="GameOne">
                <GameContent breeds={this.props.gameOneDogs} />
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