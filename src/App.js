import React, { useState } from 'react';
import './App.css';

function App() {
  const [movieName, setMovieName] = useState('');
  const [movieData, setMovieData] = useState(null);

  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };

  const fetchMovieInfo = () => {
    const apikey = "6a43f971";

    const url = `http://www.omdbapi.com/?apikey=${apikey}&t=${movieName}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieData(data);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Movie Info App</h1>
      <div className="form-group">
        <label htmlFor="movie">Movie Name</label>
        <input
          className="form-control"
          type="text"
          id="movie"
          placeholder="Enter movie name..."
          value={movieName}
          onChange={handleMovieNameChange}
        />
      </div>
      <div className="form-group mt-2">
        <button className="btn btn-danger btn-block" onClick={fetchMovieInfo}>
          Search
        </button>
      </div>

      <div className="result">
        {movieData && (
          <div>
            <img
              style={{ float: 'left' }}
              className="img-thumbnail"
              width="200"
              height="200"
              src={movieData.Poster}
              alt="Movie Poster"
            />
            <h2>{movieData.Title}</h2>
            <h2>{movieData.Released}</h2>
            <h2>{movieData.Runtime}</h2>
            <h2>{movieData.Genre}</h2>
            <h2>{movieData.Director}</h2>
            <h2>{movieData.Actors}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
