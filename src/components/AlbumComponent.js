import React from 'react'

function Album(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.imagen} alt="album" />
      <h3>{props.subtitle}</h3>
      <h3> Produced by: {props.linethree}</h3>
      {props.songs.map((eachsong, idx) => {
        return (
          <div>
            {eachsong.name}... {eachsong.author}... {eachsong.duration}
          </div>
        )
      })}
    </div>
  )
}

export default Album
