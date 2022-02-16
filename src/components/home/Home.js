import { useEffect, useState } from "react";
import MovieList from "../movieList/MovieList";

function Home() {
  const [movies, setMovies] = useState();

  function updateMovie(newMovie, id) {
    const updatedMovie = movies.map((movie) => {
      if (movie.id === id) {
        movie.comment = newMovie.comment;
        return movie;
      }
      return movie;
    });
    return setMovies(updatedMovie);
  }

  async function getMovies() {
    try {
      // The environment Variables are not working ".env"
      const response = await fetch(
        `https://movies-appj.herokuapp.com/trending`
      );
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {movies && <MovieList movies={movies} updateMovie={updateMovie} />}
    </div>
  );
}

export default Home;
