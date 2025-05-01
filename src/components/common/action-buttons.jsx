import LocalDatabase from "../../modules/LocalDatabase";

export default function ActionButtons({ movieId }) {
  const watcHistory = LocalDatabase.getWatchHistory();
  const wishList = LocalDatabase.getWishList();

  return watcHistory.includes(movieId)?<button></button>
}
