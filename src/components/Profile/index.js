import React, { Component } from 'react'
import ReturnButton from '../ReturnButton'

export default class Profile extends Component {
  render() {
    return (
      <>
          <ReturnButton toPath={'../'} pageName={'Landing Page'} />
          <ReturnButton toPath={'../game-one'} pageName={'Game One'} />
          <ReturnButton toPath={'../dogopedia'} pageName={'Dogopedia'} />
        <div><h1>Hey!</h1></div>
      </>
    )
  }
}
