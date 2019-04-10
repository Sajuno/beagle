import React from 'react'

export default function GameTwoRender(props) {
  return (
    <div>
      {props.content.map(item => {
          return <img src={item.image} key={item.name} alt={item.name}/>
      })}
    </div>
  )
}
