import React, { Component } from "react";
import { getDogs } from '../../actions/gameone/getDogs'
import { connect } from 'react-redux'
import GameTwoContent from './GameTwoContent'


class GameTwo extends Component {
    componentDidMount() {
        this.props.getDogs()
    }

    render() {
        if(!this.props.gameOneDogs) return 'loading...'
        return (
            <div>
                <GameTwoContent breeds={this.props.gameOneDogs} />
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameOneDogs: state.gameOneDogs
    }
}

export default connect(mapStateToProps, { getDogs })(GameTwo)