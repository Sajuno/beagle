import React, { Component } from "react";
import { getDogs } from '../../actions/gameone/getDogs'
import { connect } from 'react-redux'
import Image from './Image'

class GameOne extends Component {
    componentDidMount() {
        this.props.getDogs()
    }

    render() {
        if(!this.props.gameOneDogs) return 'loading...'
        return (
            <div>
                <Image breed={this.props.gameOneDogs[0]} />
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