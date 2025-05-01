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
}
export default new LocalDatabase();
