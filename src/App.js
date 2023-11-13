import search from './search.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

// 1d32827d
// http://www.omdbapi.com/?i=tt3896198&apikey=1d32827d

const API_URI = 'http://www.omdbapi.com/?apikey=1d32827d';


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URI}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
    console.log(data)

  }

  useEffect(() => {
    searchMovies('Batman Superman');
  }, [])


  return (
    <div className="App">

      <h1>Movixer</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} />
        <img src={search} alt='Search' onClick={()=> {searchMovies(searchTerm)}} />
      </div>


      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  );
}

export default App;
