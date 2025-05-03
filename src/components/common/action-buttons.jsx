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
    const JSX = [];
    if (watcHistory.includes(movie.id)) {
      JSX.push(
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
      JSX.push(
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
      JSX.push(
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
      JSX.push(<button
        className="btn btn-outline-primary rounded-0 p-0 px-1 fs-6 small"
        onClick={() => {
          CoreActions.addToWishList(movie);
          setRerender((prevState) => !prevState);
        }}
      >
        ☆
      </button>);
    }
  }
  return (
    <>
      <img
        src="/src/assets/images/icons/more-actions-btn.png"
        alt=""
        className="more-actions-btn"
        onClick={() => setShow((prevState) => !prevState)}
      />
      {
        // If movie is in watch history, return 'remove' button else 'add' button.
        watcHistory.includes(movie.id) ? (
          <button
            className="btn btn-outline-danger rounded-0 p-0 px-1 fs-6 small"
            onClick={() => {
              CoreActions.removeFromWatchHistory(movie);
              setRerender((prevState) => -prevState);
            }}
          >
            -
          </button>
        ) : (
          <button
            className="btn btn-outline-success rounded-0 p-0 px-1 fs-6 small"
            onClick={() => {
              CoreActions.addToWatchHistory(movie);
              setRerender((prevState) => -prevState);
            }}
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
            onClick={() => {
              CoreActions.removeFromWishList(movie);
              setRerender((prevState) => -prevState);
            }}
          >
            ★
          </button>
        ) : (
          <button
            className="btn btn-outline-primary rounded-0 p-0 px-1 fs-6 small"
            onClick={() => {
              CoreActions.addToWishList(movie);
              setRerender((prevState) => -prevState);
            }}
          >
            ☆
          </button>
        )
      }
    </>
  );
}
