import { useState } from "react";
import CoreActions from "../../modules/CoreActions";
import LocalDatabase from "../../modules/LocalDatabase";

export default function ActionButtons({ movie }) {
  const watcHistory = LocalDatabase.getWatchHistory();
  const wishList = LocalDatabase.getWishList();
  const [reRender, setRerender] = useState(false);
  //   console.log(watcHistory, wishList);

  const [show, setShow] = useState(false);

  function setupButtons() {
    const buttonsJSX = [];
    console.log("Setting up buttons for movie:", movie);
    console.log("Watch history:", watcHistory);
    console.log("Wish list:", wishList);

    if (watcHistory.includes(movie.id)) {
      buttonsJSX.push(
        <button
          className="nav-link link-danger rounded-0 p-0 px-1 fs-6 small"
          onClick={() => {
            CoreActions.removeFromWatchHistory(movie);
            setRerender((prevState) => -prevState);
          }}
        >
          Mark unwatched
        </button>
      );
    } else {
      buttonsJSX.push(
        <button
          className="nav-link link-success rounded-0 p-0 px-1 fs-6 small"
          onClick={() => {
            CoreActions.addToWatchHistory(movie);
            setRerender((prevState) => -prevState);
          }}
        >
          Mark watched
        </button>
      );
    }

    if (wishList.includes(movie.id)) {
      buttonsJSX.push(
        <button
          className="nav-link link-warning rounded-0 p-0 px-1 fs-6 small"
          onClick={() => {
            CoreActions.removeFromWishList(movie);
            setRerender((prevState) => !prevState);
          }}
        >
          Wishlisted
        </button>
      );
    } else {
      buttonsJSX.push(
        <button
          className="nav-link link-primary rounded-0 p-0 px-1 fs-6 small"
          onClick={() => {
            CoreActions.addToWishList(movie);
            setRerender((prevState) => !prevState);
          }}
        >
          Wishlist
        </button>
      );
    }

    console.log("Buttons created:", buttonsJSX);
    return (
      <>
        {buttonsJSX[0]}
        {buttonsJSX[1]}
      </>
    );
  }
  return (
    <div style={{ position: "relative" }}>
      <img
        src="/src/assets/images/icons/more-actions-btn.png"
        alt=""
        className="more-actions-btn"
        onClick={() => {
          console.log("Current show state:", show);
          setShow((prevState) => !prevState);
        }}
      />
      {show && <div className="action-buttons">{setupButtons()}</div>}
    </div>
  );
}
