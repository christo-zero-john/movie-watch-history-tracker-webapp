import LocalDatabase from "./LocalDatabase";

class CoreActions {
  constructor() {
    if (!CoreActions.instance) {
      CoreActions.instance = this;
    }
    return CoreActions.instance;
  }

  addToWatchList(movie) {
    const action = window.confirm(
      `Are you sure you want to add the movie ${movie.title} to your watchlist?`
    );
    if (action) {
      let watchHistory = LocalDatabase.getWatchHistory();
      // Check whether movie already in watch history
      if (watchHistory.includes(movie.id)) {
        window.confirm(`${movie.title} already in watch history`);
      } else {
        watchHistory.push(movie.id);
        console.log(watchHistory);
        LocalDatabase.putWatchHistory(watchHistory);
        console.log("Watch history updated:", LocalDatabase.getWatchHistory());
        window.confirm("Successfully saved to watch history");
      }
    } else {
      console.log("Action cancelled by user. Movie not save to watch history.");
    }
  }

  addToWishList(movie) {
    const action = window.confirm(
      `Are you sure you want to add the movie ${movie.title} to your wish list?`
    );
    if (action) {
      let wishList = LocalDatabase.getWishList();
      // Check whether movie already in Wish List
      if (wishList.includes(movie.id)) {
        window.confirm(`${movie.title} already in Wish List`);
      } else {
        wishList.push(movie.id);
        console.log(wishList);
        LocalDatabase.putWishList(wishList);
        console.log("Wish List updated:", LocalDatabase.getWishList());
        window.confirm("Successfully saved to Wish List");
      }
    } else {
      console.log("Action cancelled by user. Movie not save to Wish List.");
    }
  }
}
export default new CoreActions();
