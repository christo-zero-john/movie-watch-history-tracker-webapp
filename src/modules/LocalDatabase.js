import Dexie from "dexie";
import TMDB from "./TMDB";

class LocalDatabase {
  constructor() {
    if (!LocalDatabase.instance) {
      LocalDatabase.instance = this;
    }
    return LocalDatabase.instance;
  }

  initializeDatabase() {
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

    console.log("Local database initialized successfully.");
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
  async putMovieToDB(movieDetails) {
    console.log("Saving new movie to local database");
    const response = await this.movieDB.movies.add(movieDetails);
    if (response == movieDetails.id) {
      console.log("Movie successfully saved to database");
    } else {
      console.log("Error saving movie to database");
    }
  }

  /**
   * @description Used to fetch movie from IndexDB. If movie is not present in the INdexDB, fetch movie from TMDB and save it to the IndexDB
   * @param {number} movieID A valid TMDB movie ID.
   * @returns
   */
  async getMovieFromDB(movieID) {
    // console.log("Fetching movie from local database");
    const movieDetails = await this.movieDB.movies.get(movieID);
    // console.log(movieDetails);
    if (!movieDetails) {
      console.log("Movie not found in local database, fetching from TMDB API");
      return TMDB.getMovieById(movieID).then(async (data) => {
        console.log(data);
        await this.putMovieToDB(data);
        return data;
      });
    } else {
      return movieDetails;
    }
  }

  async constructMoviesList(movieIDs) {
    console.log("Fetching movie details from local database");
    const tempMovies = [];
    // We should use for loop as only then we can execute mutiple awaits inisde the for loop without reloving a promise or using a promise chain
    for (const movieID of movieIDs) {
      const movie = await this.getMovieFromDB(movieID);
      if (movie) {
        tempMovies.push(movie);
      }
    }
    return tempMovies;
  }
}
export default new LocalDatabase();
