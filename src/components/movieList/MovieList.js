import React from "react";
import Movie from "../movie/Movie";
import "./MovieList.css";
function MovieList({ movies, updateMovie }) {
  return (
    <div className="component">
      <h1>Trending Movies</h1>
      <div className="container">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} updateMovie={updateMovie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
