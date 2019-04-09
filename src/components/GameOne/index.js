import React, { Component } from "react";
import { getDogs } from '../../actions/gameone/getDogs'
import { connect } from 'react-redux'
import Image from './Image'

class GameOne extends Component {
    componentDidMount() {
        this.props.getDogs(50)
    }

    render() {
        if(!this.props.gameOneDogs) return 'loading...'
        return (
            <div>
                <Image breed={this.props.gameOneDogs[50].name} image={this.props.gameOneDogs[50].image} />
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