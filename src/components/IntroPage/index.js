import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops'
import './index.css'

export default class index extends Component {
  render() {
    return(
    <Spring
    config={{duration: 2000}}
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}>
    {props => <div style={props}><h1 className='intro-h1'>Henk de Vries presents...</h1></div>}
    </Spring>
    )
  }
}
