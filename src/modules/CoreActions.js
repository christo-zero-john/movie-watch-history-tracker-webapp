class CoreActions {
  constructor() {
    if (!CoreActions.instance) {
      CoreActions.instance = this;
    }
    return CoreActions.instance;
  }

  addToWatchList(movieId) {
    window.confirm("Are you sure you want to add this movie to your watchlist?")
      ? console.log(`Movie with ID ${movieId} added to watchlist`)
      : console.log("Action cancelled");
  }
}
export default new CoreActions();
