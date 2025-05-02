import { useState } from "react";
import LocalDatabase from "../../modules/LocalDatabase";
import DisplayMoviesList from "../common/display-movies-list";
import NavBar from "../common/nav-bar";
import { useEffect } from "react";

export default function WatchHistory() {
  const watchHistory = LocalDatabase.getWatchHistory();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // getMovieFromDB is async, so we need to use async await.
    watchHistory.forEach(async (movieID) => {
      const movie = await LocalDatabase.getMovieFromDB(movieID);
      console.log(movie);
      if (movie) {
        setMovies((prevState) => [...prevState, movie]);
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      {
        // If watch history has some elements but movies does not have, then display a message.
        watchHistory.length > 0 ? (
          movies.length == 0 ? (
            <p className="alert alert-warning text-center">
              Fetching movies from database
            </p>
          ) : (
            <DisplayMoviesList movies={movies} />
          )
        ) : (
          <p className="alert alert-danger text-center">
            No movies found. Add some movies to the list to display here.
          </p>
        )
      }
    </>
  );
}
