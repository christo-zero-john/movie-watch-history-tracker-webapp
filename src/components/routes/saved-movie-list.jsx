import { useState } from "react";
import LocalDatabase from "../../modules/LocalDatabase";
import DisplayMoviesList from "../common/display-movies-list";
import NavBar from "../common/nav-bar";
import { useEffect } from "react";
import { useParams } from "react-router";

/**
 * This component can be used to diplay both wihlist and atch history
 * @param {props} The props.context is used to determine whether to display, wish lost or watch history
 * @returns
 */
export default function WatchHistory__WishList() {
  const { context } = useParams();
  const context_actions = {
    "watch-history": LocalDatabase.getWatchHistory,
    "wish-list": LocalDatabase.getWishList,
  };

  // The context prop should have a value that is a valid key of the context_actions object. Then the method of the context_actions object with that key can be executed to get the movie list.
  const movieList = context_actions[context]();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    /**
     * The movieList only has an array of movie ID's. The movies are stored in the IndexDB using Dexie js. This can be done using the constructMoviesList of localDatabase class.
     * So fetch movie details of each movie ID in the movieList and store them as an array of objects in the movies state.
     */

    (async () => {
      let list = await LocalDatabase.constructMoviesList(movieList);
      console.log(list);
      setMovies(list);
    })();
  }, []);

  return (
    <>
      <NavBar />
      {
        // If movie list has some elements but movies does not have, then display a message.
        movieList.length > 0 ? (
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
