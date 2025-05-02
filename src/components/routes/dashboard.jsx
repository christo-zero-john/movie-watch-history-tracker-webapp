import { useState } from "react";
import { useEffect } from "react";
import LocalDatabase from "../../modules/LocalDatabase";

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
    <>
      <h1 className="text-center my-2 Dashboard">Dashboard</h1>
    </>
  );
}
