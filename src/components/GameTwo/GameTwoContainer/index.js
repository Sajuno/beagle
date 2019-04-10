import React, { Component } from 'react'
import getRandomBreed from '../../GameOne/GameContent/getRandomBreed'
import getDogsWithPics from '../../../actions/gameTwo/getDogsWithPics'
import { connect } from 'react-redux'
import gameTwoDogs from '../../../reducers/gameTwoDogs';

// const DogListWithPictures = []
let DogList2 = getDogsWithPics()

class GameTwoContainer extends Component {
  componentDidMount = () => {
      this.props.getDogsWithPics()
  }
//     this.showPictures()
//     request('https://dog.ceo/api/breeds/list/all')
//       .then(response => {
//           DogList2 = Object.keys(response.body.message)
//           return DogList2
//       }).then(data => {
//           data.map(breed => {
//               request(`https://dog.ceo/api/breed/${breed}/images/random/1`)
//                 .then(response => {
//                     DogListWithPictures.push({[breed]: response.body.message[0]})
//                     return DogListWithPictures
//                 })
//           })
//       })
//   }

// //   randomArray = () => {
// //       const randomArray = [Math.floor(Math.random() * 87),Math.floor(Math.random() * 87),Math.floor(Math.random() * 87)]
// //       return randomArray
// //   }
  
//   showPictures = () => {
//       console.log("showpictures: ", DogListWithPictures)
//       console.log("showpictures index: ", DogListWithPictures[0])
//   }
render() {
    return (
        <div>
        {console.log("doglist 2: ",DogList2)}
        
      </div>
    )
}
}

const mapStateToProps = (state) => {
    return { gameTwoDogs: state.gameTwoDogs }
}

export default connect(mapStateToProps, { getDogsWithPics })(GameTwoContainer)
