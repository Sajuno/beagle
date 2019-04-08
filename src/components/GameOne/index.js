import React, { Component } from "react";
import { getDogs } from '../../actions/gameone/getDogs'
import { connect } from 'react-redux'

class GameOne extends Component {
    componentDidMount() {
        this.props.getDogs()
    }

    render() {
        return (
            <div>
              asd
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