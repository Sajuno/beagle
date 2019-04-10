import React, { Component } from 'react'
import request from 'superagent'

const DogListWithPictures = []

export default class GameTwoContainer extends Component {
  componentDidMount = () => {
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => {
          const DogList2 = Object.keys(response.body.message)
          console.log(DogList2)
          return DogList2
      }).then(data => {
          console.log("data: ",data)
          data.map(breed => {
              request(`https://dog.ceo/api/breed/${breed}/images/random/1`)
                .then(response => {
                    console.log("response 2: ",breed)
                    DogListWithPictures.push({[breed]: response.body.message[0]})
                    console.log("Doglist with pictures?", DogListWithPictures)
                    return DogListWithPictures
                })
          })
      })
  }
  
  render() {
      return (
          <div>
        
      </div>
    )
}
}
