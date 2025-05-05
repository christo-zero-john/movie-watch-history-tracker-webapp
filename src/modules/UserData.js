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
      // Fetch all movies in watch history and setup userData.data
      this.watchHistory = await CoreActions.getMoviesInWatchHistory();
      this.wishList = await CoreActions.getMoviesInWishList();

      this.totalMovies = this.watchHistory.length;
      this.currentStreak = 0;
      this.genres = 0;
      
      this.watchHistory.forEach((movie) => {
        // Calculate total watch time of the user and set userdata.data.watchTime
        const calculatedRuntime = helpers.constructRuntime(movie.runtime);
        this.data.watchTime[0] += calculatedRuntime[0];
        this.data.watchTime[1] += calculatedRuntime[1];
      });

      // After completeing the loop, watch time in minutes will be greater than 60 (Because we are just adding up minutes of all n movies into the watchTime[1], which stores total minutes). Hence, we should convert it to hours and minutes once again and save the new results as final watch time.
      const calculatedRuntime = helpers.constructRuntime(
        this.data.watchTime[1]
      );

      this.data.watchTime[0] += calculatedRuntime[0];
      this.data.watchTime[1] = calculatedRuntime[1];
      console.log(this.data.watchTime);
    })();
  }
}
export default new UserData();
