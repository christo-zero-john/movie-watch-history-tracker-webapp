import CoreActions from "./CoreActions";
import helpers from "./Helpers";
import LocalDatabase from "./LocalDatabase";

class UserData {
  constructor() {
    if (!UserData.instance) {
      UserData.instance = this;
    }

    // Initialize local database
    LocalDatabase.initializeDatabase();

    this.data = {
      watchTime: [0, 0],
      totalMoviesWatched: 0,
      currentStreak: 0,
      genres: [],
    };

    return UserData.instance;
  }

  initializeUserData() {
    console.log("Initializing user data");

    /** comment
     * An async function that could fetch all movies in watch history and wishlist and save those in userdata
     */
    (async () => {
      /** comment
       * Fetch all movies in watch history and setup userData.data
       */
      this.watchHistory = await CoreActions.getMoviesInWatchHistory();
      this.wishList = await CoreActions.getMoviesInWishList();

      // calculate total movies in watch history
      this.data.totalMoviesWatched = this.watchHistory.length;

      /** comment
       * Loop through all movie item in the watchHistory and set the userdata.data
       */
      this.watchHistory.forEach((movie) => {
        /** comment
         * Calculate total watch time of the user and set userdata.data.watchTime
         */
        const calculatedRuntime = helpers.constructRuntime(movie.runtime);
        this.data.watchTime[0] += calculatedRuntime[0];
        this.data.watchTime[1] += calculatedRuntime[1];

        /** comment
         * Save all genres of user in userdata.data.genres. Loop through all genre of movie item and push it to userdata.data.genres if it is not already in it.
         */
        movie.genres.forEach((genre) => {
          let flag = 0;
          this.data.genres.forEach((InGenre) => {
            if (InGenre.name == genre.name) {
              flag = 1;
            }
          });
          if (flag == 0) {
            this.data.genres.push(genre);
          }
        });
      });

      /**
       * comment
       * After completeing the loop, watch time in minutes will be greater than 60 (Because we are just adding up minutes of all n movies into the watchTime[1], which stores total minutes). Hence, we should convert it to hours and minutes once again and save the new results as final watch time.
       */
      const calculatedRuntime = helpers.constructRuntime(
        this.data.watchTime[1]
      );

      this.data.watchTime[0] += calculatedRuntime[0];
      this.data.watchTime[1] = calculatedRuntime[1];

      console.log(this.data);
    })();
  }
}
export default new UserData();
