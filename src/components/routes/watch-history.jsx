import { useState } from "react";
import LocalDatabase from "../../modules/LocalDatabase";
import DisplayMoviesList from "../common/display-movies-list";
import NavBar from "../common/nav-bar";
import { useEffect } from "react";

export default function WatchHistory() {
  const watchHistory = LocalDatabase.getWatchHistory();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    /**
     * The watchHistory only has an array of movie ID's. The movies are stored in the IndexDB using Dexie js.
     * So fetch movie details of each movie ID in the watchHistory and store them as an array of objects in the movies state.
     */
    watchHistory.forEach(async (movieID) => {
      // Fetch and store db in the state
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
