import { useState } from "react";
import { useEffect } from "react";
import LocalDatabase from "../../modules/LocalDatabase";
import NavBar from "../common/nav-bar";
import UserStatistics from "../dashboard/user-statistics";
import { Link } from "react-router";
import MyGenre from "../dashboard/my-genre";
import DisplayMoviesList from "../common/display-movies-list";
import UserData from "../../modules/UserData";

export default function Dashboard() {
  const [savedLists, setSavedLists] = useState(null);

  const [userdata, setUserdata] = useState({
    watchTime: [0, 0],
    totalMoviesWatched: 0,
    currentStreak: 0,
    genres: [],
  });

  useEffect(() => {
    const watchHistory = LocalDatabase.getWatchHistory();

    /**
     * The movieList only has an array of movie ID's. The movies are stored in the IndexDB using Dexie js. This can be done using the constructMoviesList of localDatabase class.
     * So fetch movie details of each movie ID in the movieList and store them as an array of objects in the movies state.
     */

    (async () => {
      let watchHistoryMovies = await LocalDatabase.constructMoviesList(
        watchHistory
      );
      // console.log(watchHistoryMovies, wishListMovies);
      setTimeout(() => setUserdata(UserData.data), 500);
      setSavedLists(watchHistoryMovies);
    })();
  }, []);

  return (
    <div className="bg-dark text-light hd-100 overflow-auto no-scrollbar">
      <NavBar active="dashboard" />
      <UserStatistics userdata={userdata} />
      <Link
        className="p-0 ps-2 add-movie-btn rounded-0 float-end sticky-bottom border-0 my-2 nav-link"
        type="button"
        to="/search"
      >
        Add Movie
        <img
          src="/src/assets/images/icons/add-movie-btn.png"
          alt=""
          className="ms-2 h-100"
          loading="lazy"
        />
      </Link>
      {
        // Check if the lists are ready to be displayed. If not, then display a message

        !savedLists ? (
          <p className="alert alert-warning text-center">Fetching user data</p>
        ) : (
          // If the lists are ready to be displayed, then first display the watch history.
          <>
            <section className="watched-movies col-11 mx-auto my-5 mb-4">
              <h2 className="section-title fs-6">Watched Movies</h2>
              <div
                className="movie-list p-3 p-md-4 rounded d-flex flex-row justify-content-start align-items-center flex-nowrap overflow-auto no-scrollbar"
                id="my-movies"
              >
                {
                  // Check whether the first list is empty or not. If empty means nothing in watch history
                  savedLists.length == 0 ? (
                    <p className="text-center text-warning w-100">
                      Add some movies to your watch history to appear here
                    </p>
                  ) : (
                    <DisplayMoviesList
                      movies={savedLists}
                      className="flex-nowrap overflow-auto no-scrollbar justify-content-start"
                    />
                  )
                }
              </div>

              <MyGenre genres={userdata.genres} />
            </section>
          </>
        )
      }
    </div>
  );
}
