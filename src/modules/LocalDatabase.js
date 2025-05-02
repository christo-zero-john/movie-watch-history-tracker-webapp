import Dexie from "dexie";
import TMDB from "./TMDB";

class LocalDatabase {
  constructor() {
    if (!LocalDatabase.instance) {
      LocalDatabase.instance = this;
    }
    return LocalDatabase.instance;
  }

  initialzeDatabase() {
    // console.log("Initializing local database");
    if (!localStorage.getItem("watch-history")) {
      // console.log("No watch history found, creating an empty one.");
      localStorage.setItem("watch-history", JSON.stringify([]));
    }
    if (!localStorage.getItem("wish-list")) {
      // console.log("No wish list found, creating an empty one.");
      localStorage.setItem("wish-list", JSON.stringify([]));
    }

    this.movieDB = new Dexie("movieDB");
    this.movieDB.version(1).stores({
      movies: `
        id,
        title,
        release_date,
        popularity,
        vote_average,
        genres,
        production_companies,
        original_language
      `,
    });

    // console.log("Local database initialized successfully.");
  }

  getWatchHistory() {
    // console.log("Fetching watch history");
    return JSON.parse(localStorage.getItem("watch-history"));
  }

  getWishList() {
    // console.log("Fetching wish list");
    return JSON.parse(localStorage.getItem("wish-list"));
  }

  putWatchHistory(data) {
    // console.log("Saving new watch history");
    return JSON.stringify(
      localStorage.setItem("watch-history", JSON.stringify(data))
    );
  }

  putWishList(data) {
    // console.log("Saving new wish list");
    return JSON.stringify(
      localStorage.setItem("wish-list", JSON.stringify(data))
    );
  }

  /**
   * Recieves movie details fetched from the tmdb api and saves it to the local database (indexDB here).
   */
  putMovieToDB(movieDetails) {
    // console.log("Saving new movie to local database");
    return this.movieDB.movies.add(movieDetails);
  }

  async getMovieFromDB(movieID) {
    // console.log("Fetching movie from local database");
    const movieDetails = await this.movieDB.movies.get(movieID);
    console.log(movieDetails);
    if (!movieDetails) {
      TMDB.getMovieById(movieID).then((data) => {
        console.log(
          "Movie not found in local database, fetching from TMDB API"
        );
        this.putMovieToDB(data);
        return data;
      });
    } else {
      return movieDetails;
    }
  }
}
export default new LocalDatabase();
