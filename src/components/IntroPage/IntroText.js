import React, { Component } from 'react'
import { Wave } from 'react-animated-text'

export default class TextOne extends Component {
    state = {display: false}

    componentDidMount() {
        setTimeout(() => this.setState({display: true}), this.props.delay)
    }

    render() {
        return (
            <h1 className="intro-h1">
                {this.state.display && 
                    <Wave 
                        effect="verticalFadeIn" 
                        text={this.props.text} 
                        iterations={1}
                        speed={15}
                    />
                }
            </h1>
        )
    }
}
