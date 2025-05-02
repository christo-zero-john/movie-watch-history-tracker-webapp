import LocalDatabase from "../../modules/LocalDatabase";
import DisplayMoviesList from "../common/display-movies-list";
import NavBar from "../common/nav-bar";

export default function WatchHistory() {
  const watchHistory = LocalDatabase.getWatchHistory();
  const movies = LocalDatabase.getMoviesFromDB();
  return (
    <>
      <NavBar />
      <DisplayMoviesList movies={watchHistory} />
    </>
  );
}
