import { useState } from "react";
import CoreActions from "../../modules/CoreActions";
import LocalDatabase from "../../modules/LocalDatabase";
import moreActionBtn from "/src/assets/images/icons/more-actions-btn.svg";

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
          className="btn btn-outline-danger rounded-0 p-0 px-1 fs-6 small"
          onClick={() => {
            CoreActions.removeFromWatchHistory(movie);
            setRerender((prevState) => -prevState);
          }}
        >
          -
        </button>
      );
    } else {
      buttonsJSX.push(
        <button
          className="btn btn-outline-success rounded-0 p-0 px-1 fs-6 small"
          onClick={() => {
            CoreActions.addToWatchHistory(movie);
            setRerender((prevState) => -prevState);
          }}
        >
          +
        </button>
      );
    }

    if (wishList.includes(movie.id)) {
      buttonsJSX.push(
        <button
          className="btn btn-outline-warning rounded-0 p-0 px-1 fs-6 small"
          onClick={() => {
            CoreActions.removeFromWishList(movie);
            setRerender((prevState) => !prevState);
          }}
        >
          ★
        </button>
      );
    } else {
      buttonsJSX.push(
        <button
          className="btn btn-outline-primary rounded-0 p-0 px-1 fs-6 small"
          onClick={() => {
            CoreActions.addToWishList(movie);
            setRerender((prevState) => !prevState);
          }}
        >
          ☆
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
    <div>
      <img
        src={moreActionBtn}
        alt=""
        className="more-actions-btn"
        onClick={() => {
          console.log("Current show state:", show);
          setShow((prevState) => !prevState);
        }}
      />
      {console.log(show)}
      {show && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            zIndex: 1000,
            minWidth: "100px",
            display: "flex",
            gap: "0.5rem",
            backgroundColor: "#212529",
            padding: "0.5rem",
            borderRadius: "0.25rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          {setupButtons()}
        </div>
      )}
    </div>
  );
}
