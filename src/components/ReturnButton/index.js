import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ReturnButton extends Component {
  render() {
    return <Link to={this.props.toPath}>{this.props.pageName}</Link>
  }
}
