import CoreActions from "../../modules/CoreActions";
import LocalDatabase from "../../modules/LocalDatabase";

export default function ActionButtons({ movie }) {
  const watcHistory = LocalDatabase.getWatchHistory();
  const wishList = LocalDatabase.getWishList();
//   console.log(watcHistory, wishList);

  return (
    <>
      {
        // If movie is in watch history, return 'remove' button else 'add' button.
        watcHistory.includes(movie.id) ? (
          <button
            className="btn btn-outline-danger rounded-0 p-0 px-1 fs-6 small"
            onClick={() => CoreActions.removeFromWatchHistory(movie)}
          >
            -
          </button>
        ) : (
          <button
            className="btn btn-outline-success rounded-0 p-0 px-1 fs-6 small"
            onClick={() => CoreActions.addToWatchHistory(movie)}
          >
            +
          </button>
        )
      }
      {
        // If movie is in wish list, return 'remove' button else return 'add' button.
        wishList.includes(movie.id) ? (
          <button
            className="btn btn-outline-warning rounded-0 p-0 px-1 fs-6 small"
            onClick={() => CoreActions.removeFromWishList(movie)}
          >
            ★
          </button>
        ) : (
          <button
            className="btn btn-outline-primary rounded-0 p-0 px-1 fs-6 small"
            onClick={() => CoreActions.addToWishList(movie)}
          >
            ☆
          </button>
        )
      }
    </>
  );
}
