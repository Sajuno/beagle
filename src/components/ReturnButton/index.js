import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class ReturnButton extends Component {
  render() {
    return <Link to={this.props.toPath}><p class="ReturnButton">{this.props.pageName}</p></Link>
  }
}
