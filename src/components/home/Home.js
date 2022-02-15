import { useEffect, useState } from "react";
import MovieList from "../movieList/MovieList";

function Home() {
  const [movies, setMovies] = useState();
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
  return <div>{movies && <MovieList movies={movies} />}</div>;
}

export default Home;
