import LocalDatabase from "./LocalDatabase";

class CoreActions {
  constructor() {
    if (!CoreActions.instance) {
      CoreActions.instance = this;
    }
    return CoreActions.instance;
  }

  addToWatchHistory(movie) {
    const action = window.confirm(
      `Are you sure you want to add the movie ${movie.title} to your watch history?`
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

  removeFromWatchHistory(movie) {
    const action = window.confirm(
      `Are you sure you want to remove the movie ${movie.title} from your watch history?`
    );
    if (action) {
      let watchHistory = LocalDatabase.getWatchHistory();
      // Check whether movie already in watch history
      if (watchHistory.includes(movie.id)) {
        // Fiter out all movie ID's except the one to be removed. This is done to avoid mutating the original array and to ensure that we only remove the specific movie ID
        watchHistory = watchHistory.filter((id) => id !== movie.id);
        console.log(watchHistory);
        LocalDatabase.putWatchHistory(watchHistory);
        console.log("Watch history updated:", LocalDatabase.getWatchHistory());
        window.confirm("Successfully removed from watch history");
      } else {
        window.confirm(`${movie.title} not found in watch history`);
      }
    } else {
      console.log(
        "Action cancelled by user. Movie not removed from watch history."
      );
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

  removeFromWishList(movie) {
    const action = window.confirm(
      `Are you sure you want to remove the movie ${movie.title} from your wish list?`
    );
    if (action) {
      let wishList = LocalDatabase.getWishList();
      // Check whether movie already in Wish List
      if (wishList.includes(movie.id)) {
        // Fiter out all movie ID's except the one to be removed. This is done to avoid mutating the original array and to ensure that we only remove the specific movie ID
        wishList = wishList.filter((id) => id !== movie.id);
        console.log(wishList);
        LocalDatabase.putWishList(wishList);
        console.log("Wish List updated:", LocalDatabase.getWishList());
        window.confirm("Successfully removed from Wish List");
      } else {
        window.confirm(`${movie.title} not found in Wish List`);
      }
    } else {
      console.log(
        "Action cancelled by user. Movie not removed from Wish List."
      );
    }
  }
}
export default new CoreActions();
