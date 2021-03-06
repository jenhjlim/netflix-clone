import React, { useState, useEffect} from 'react';
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  // state : short-term memory
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition
  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // if [], run once when the row loads, and don't run again
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div>
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img 
            className="row__poster"
            src={`${base_url}${movie.poster_path}`} alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
