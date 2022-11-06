import './App.css'
import anaAlbums from './data.json'
import AlbumComponent from './components/AlbumComponent'

const App = () => {
  console.log(anaAlbums)
  return (
    <div>
      <h1>Ana Torroja's Albums</h1>
      <div className="main">
        {anaAlbums.Albums.map((eachanaAlbums, idx) => {
          return (
            <AlbumComponent
              title={eachanaAlbums.name}
              subtitle={eachanaAlbums.year_published}
              linethree={eachanaAlbums.producer}
              imagen={eachanaAlbums.album_cover_url}
              songs={eachanaAlbums.songs}
              key={idx}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App

{
  /* <div>
{anaAlbums.Albums.map((eachanaAlbums, idx) => { 
  return (
    <SongsComponent
    songname={eachanaAlbums.songs.name}
    songauthor={eachanaAlbums.songs.author}
    songduration={eachanaAlbums.songs.duration}
    key ={idx}
  />
    )
    </div> */
}
