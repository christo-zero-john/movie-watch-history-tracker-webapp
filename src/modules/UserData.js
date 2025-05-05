import CoreActions from "./CoreActions";
import helpers from "./helpers";
import LocalDatabase from "./LocalDatabase";

class UserData {
  constructor() {
    if (!UserData.instance) {
      UserData.instance = this;
    }

    this.data = {
      watchTime: [0, 0],
      totalMovies: 0,
      currentStreak: 0,
      genres: [],
    };

    this.initializeUserData();

    return UserData.instance;
  }

  initializeUserData() {
    console.log("Initializing user data");

    // An async function that could fetch all movies in watch history and wishlist and save those in userdata
    (async () => {
      this.watchHistory = await CoreActions.getMoviesInWatchHistory();
      this.wishList = await CoreActions.getMoviesInWishList();
      this.watchTime = 0;
      this.totalMovies = 0;
      this.currentStreak = 0;
      this.genres = 0;
      this.watchHistory.forEach((movie) => {
        console.log(movie.runtime, helpers.constructRuntime(movie.runtime));
        // 3.35
      });

      console.log(this);
    })();
  }
}
export default new UserData();
