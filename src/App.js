import './App.css'
import anaAlbums from './data.json'
import AlbumComponent from './components/AlbumComponent'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        {anaAlbums.Albums.map((eachanaAlbums, idx) => {
          return (
            <AlbumComponent
              title={eachanaAlbums.name}
              subtitle={eachanaAlbums.year_published}
              linethree={eachanaAlbums.producer}
              imagen={eachanaAlbums.album_cover_url}
              songs={eachanaAlbums.songs}
              review={eachanaAlbums.personal_review}
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
