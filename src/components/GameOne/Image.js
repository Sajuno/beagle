import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getImage} from '../../actions/gameone/getImage'

class Image extends Component {
    componentDidMount() {
        this.props.breeds.forEach(dog => this.props.getImage(dog))
    }

    renderImage = (name, image) => {
        return (
            <div>
                <img src={image} alt={name} />
                {name}
            </div>
        )
    }

    render() {
        const index = Math.floor(Math.random() * this.props.breeds.length)
        const dogName = this.props.breeds[index].name
        const dogImage = this.props.breeds[index].image
        if(!this.props.breeds[0].image) return 'loading...'
        return (
            <div>
                {this.renderImage(dogName, dogImage)}
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