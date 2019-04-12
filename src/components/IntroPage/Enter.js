import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops'
import { connect } from 'react-redux';
import {setUserName} from '../../actions/user/setUserName'
import {Link} from 'react-router-dom'

class Enter extends Component {
    state = {
        display: false,
        inputValue: null,
    }

    componentDidMount() {
        setTimeout(() => this.setState({display: true}), this.props.delay)
    }

    onChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    handleClick = (event) => {
        this.props.setUserName(this.state.inputValue)
    }

    render() {
        return (
            this.state.display && <Spring from={{ opacity: 0 }} to={{ opacity: 1}} config={{duration: 2000}}>
                { props => (
                    <div className="name-form textbox-bottom" style={props}>
                        <form>
                            <input className="intro-input" type="text" placeholder="Enter your name" onChange={this.onChange}/>
                            <br />
                            <Link to="/home" onClick={this.handleClick}>
                                <button className="intro-submit">
                                Start Learning!
                                </button>
                            </Link>
                        </form>
                    </div>
                )
                }
            </Spring>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    { setUserName }
)(Enter)