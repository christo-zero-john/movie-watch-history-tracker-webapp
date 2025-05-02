import LocalDatabase from "../../modules/LocalDatabase";
import DisplayMoviesList from "../common/display-movies-list";
import NavBar from "../common/nav-bar";

export default function WatchHistory() {
  const watchHistory = LocalDatabase.getWatchHistory();
  const movies = [];
  watchHistory.forEach((movieID) => {
    const movie = LocalDatabase.getMovieFromDB(movieID);
    console.log(movie);
    if (movie) {
      movies.push(movie);
    }
  });

  return (
    <>
      <NavBar />
      <DisplayMoviesList movies={watchHistory} />
    </>
  );
}
