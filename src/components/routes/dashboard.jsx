import { useState } from "react";
import { useEffect } from "react";
import LocalDatabase from "../../modules/LocalDatabase";
import NavBar from "../common/nav-bar";
import UserStatistics from "../dashboard/user-statistics";

export default function Dashboard() {
  const [savedLists, setSavedLists] = useState(null);

  useEffect(() => {
    const watchHistory = LocalDatabase.getWatchHistory();
    const wishList = LocalDatabase.getWishList();

    /**
     * The movieList only has an array of movie ID's. The movies are stored in the IndexDB using Dexie js. This can be done using the constructMoviesList of localDatabase class.
     * So fetch movie details of each movie ID in the movieList and store them as an array of objects in the movies state.
     */

    (async () => {
      let watchHistoryMovies = await LocalDatabase.constructMoviesList(
        watchHistory
      );
      let wishListMovies = await LocalDatabase.constructMoviesList(wishList);
      console.log(watchHistoryMovies, wishListMovies);
      setSavedLists([watchHistoryMovies, wishListMovies]);
    })();
  }, []);

  return (
    <div className="bg-dark text-light hd-100 overflow-auto no-scrollbar">
      <NavBar />
      <UserStatistics />
      <h1 className="text-center my-2 Dashboard">Dashboard</h1>
      {
        // Check if the lists are ready to be displayed. If not, then display a message

        !savedLists ? (
          <p className="alert alert-warning text-center">Fetching user data</p>
        ) : (
          // If the lists are ready to be displayed, then first display the watch history.
          <>
            <h5 className="">Watch History</h5>
            {
              // Check whether the first list is empty or not. If empty means nothing in watch history
              savedLists[0].length == 0 ? (
                <p className="alert alert-warning text-center">
                  Add some movies to your watch history to appear here
                </p>
              ) : (
                savedLists[0].map((movie) => <p>{movie.title}</p>)
              )
            }

            <h5 className="">Wish List</h5>
            {
              // Check whether the second list is empty or not. If empty means nothing in wish list
              savedLists[1].length == 0 ? (
                <p className="alert alert-warning text-center">
                  Add some movies to your wish list to appear here
                </p>
              ) : (
                savedLists[1].map((movie) => <p>{movie.title}</p>)
              )
            }
          </>
        )
      }
    </div>
  );
}
