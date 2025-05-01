import LocalDatabase from "../../modules/LocalDatabase";
import DisplayMoviesList from "../common/display-movies-list";

export default function WatchHistory() {
  const watchHistory = LocalDatabase.getWatchHistory();
  return <DisplayMoviesList movies={watchHistory} />;
}
