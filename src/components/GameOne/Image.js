import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getImage} from '../../actions/gameone/getImage'

class Image extends Component {
    componentDidMount() {
        this.props.getImage(this.props.breed)
    }

    render() {
        if(!this.props.breed.image) return 'loading'
        return (
            <div>
                {this.props.breed.image[0]}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameOneDogs: state.gameOneDogs
    }
}

export default connect(mapStateToProps, { getImage })(Image)