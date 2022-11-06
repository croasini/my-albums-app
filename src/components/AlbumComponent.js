import React from 'react'

function Album(props) {
  return (
    <div className="albumCard">
      <h1 className="albumTitle">{props.title}</h1>
      <div>
        <img src={props.imagen} alt="album" />
        <h2>{props.subtitle}</h2>
        <h3> Produced by: {props.linethree}</h3>
        <h4> Personal Review: {props.review}</h4>
      </div>
      <div>
        {props.songs.map((eachsong, idx) => {
          return (
            <li className="songList">
              <b>{eachsong.name}</b> - Author: {eachsong.author} (
              {eachsong.duration})
            </li>
          )
        })}
      </div>
    </div>
  )
}

export default Album

// function Album(props) {
//   return (
//     <div>
//       <h1 className="albumTitle">{props.title}</h1>
//       <div className="albumImage">
//         <img src={props.imagen} alt="album" />
//       </div>
//       <h3>{props.subtitle}</h3>
//       <h3> Produced by: {props.linethree}</h3>
//       {props.songs.map((eachsong, idx) => {
//         return (
//           <li className="songList">
//             <b>{eachsong.name}</b> Author: {eachsong.author}({eachsong.duration}
//             )
//           </li>
//         )
//       })}
//     </div>
//   )
// }

// export default Album
