import React, { Component } from 'react'
import request from 'superagent'

const DogListWithPictures = []

export default class GameTwoContainer extends Component {
  componentDidMount = () => {
    this.showPictures()
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => {
          const DogList2 = Object.keys(response.body.message)
          return DogList2
      }).then(data => {
          data.map(breed => {
              request(`https://dog.ceo/api/breed/${breed}/images/random/1`)
                .then(response => {
                    DogListWithPictures.push({[breed]: response.body.message[0]})
                    return DogListWithPictures
                })
          })
      })
  }

  randomArray = () => {
      const randomArray = [Math.floor(Math.random() * 87),Math.floor(Math.random() * 87),Math.floor(Math.random() * 87)]
      return randomArray
  }
  
  showPictures = () => {
      console.log("showpictures: ", DogListWithPictures[5])
  }
    
  render() {
      return (
          <div>
        
      </div>
    )
}
}
