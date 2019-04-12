import React, { Component } from 'react'
import Enter from './Enter'
import './index.css'
import IntroText from './IntroText'

export default class index extends Component {

    render() {
        return (
            <div className="intro-main">
                <div id="overlay"></div>
                <div className="textbox-top">
                    <IntroText delay={2000} text="B.E.A.G.L Entertainment Presents..." />
                </div>
                <span class="sexy-line"></span>
                <div className="textbox-bottom">
                    <IntroText delay={5500} text="A Henk de Vries production..."/>
                </div>
                <Enter delay={8000}/>
            </div>
        )
    }
}
