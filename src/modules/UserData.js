import CoreActions from "./CoreActions";

import Helpers from "./Helpers";

import LocalDatabase from "./LocalDatabase";

class UserData {
  constructor() {
    if (!UserData.instance) {
      UserData.instance = this;
    }

    // Initialize local database
    LocalDatabase.initializeDatabase();

    return UserData.instance;
  }

  /** comment
   * An async function that is used to calculate user statistics
   */
  async calculateUserStats() {
    let userStats = {
      watchTime: [0, 0],
      totalMoviesWatched: 0,
      currentStreak: 0,
      genres: [],
    };

    /** comment
     * Fetch all movies in watch history and setup userData.data
     */
    const watchHistory = await CoreActions.getMoviesInWatchHistory();

    // calculate total movies in watch history
    userStats.totalMoviesWatched = watchHistory.length;

    /** comment
     * Loop through all movie item in the watchHistory and set the userdata.data
     */
    watchHistory.forEach((movie) => {
      /** comment
       * Calculate total watch time of the user and set userdata.data.watchTime
       */
      const calculatedRuntime = Helpers.constructRuntime(movie.runtime);

      userStats.watchTime[0] += calculatedRuntime[0];
      userStats.watchTime[1] += calculatedRuntime[1];

      /** comment
       * Save all genres of user in userdata.data.genres. Loop through all genre of movie item and push it to userdata.data.genres if it is not already in it.
       */
      movie.genres.forEach((genre) => {
        let flag = 0;
        userStats.genres.forEach((InGenre) => {
          if (InGenre.name == genre.name) {
            flag = 1;
          }
        });
        if (flag == 0) {
          userStats.genres.push(genre);
        }
      });
    });

    /**
     * comment
     * After completeing the loop, watch time in minutes will be greater than 60 (Because we are just adding up minutes of all n movies into the watchTime[1], which stores total minutes). Hence, we should convert it to hours and minutes once again and save the new results as final watch time.
     */
    const calculatedRuntime = Helpers.constructRuntime(userStats.watchTime[1]);

    userStats.watchTime[0] += calculatedRuntime[0];
    userStats.watchTime[1] = calculatedRuntime[1];

    return userStats;
  }
}
export default new UserData();
