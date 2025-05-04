import { useState } from "react";
import CoreActions from "../../modules/CoreActions";
import LocalDatabase from "../../modules/LocalDatabase";
import { Link } from "react-router";
import Helpers from "../../modules/helpers";
import { useEffect } from "react";

/**
 * This component is used to render action buttons of movie cards and movie details page. If the buttons need to be shown, then the expand prop will be true.
 * expand means show all action buttons instead of the icon image
 */
export default function ActionButtons({ movie, expand = false }) {
  const watcHistory = LocalDatabase.getWatchHistory();
  const wishList = LocalDatabase.getWishList();
  const [reRender, setRerender] = useState(false);
  //   console.log(watcHistory, wishList);

  const [show, setShow] = useState(false);

  useEffect(() => {
    // If expand varient, then show the buttons
    if (expand) {
      setShow(true);
    }
  }, []);

  function setupButtons() {
    const buttonsJSX = [];

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

    return (
      <>
        {buttonsJSX[0]}
        {buttonsJSX[1]}
      </>
    );
  }
  return (
    <div style={{ position: "relative" }}>
      {
        // This image lgo is acts as a button to show or hide action buttons. If displaying the 'expand' varient, then there is no need for this icon. So show the icon only if 'expand' == false
        !expand && (
          <img
            src="/src/assets/images/icons/more-actions-btn.png"
            alt=""
            className="more-actions-btn"
            onClick={() => {
              setShow((prevState) => !prevState);
            }}
          />
        )
      }
      {
        // Show buttons only if show state is true
        show && (
          // If expand is true then set class name as expanded-action buttons else action-buttons
          <div
            className={`${
              expand ? "expanded-action-buttons" : "action-buttons"
            } border border-${Helpers.getRandomColor()} `}
          >
            <Link
              to={`/details/${movie.id}`}
              className="nav-link link-info rounded-0 p-0 px-1 fs-6 small"
            >
              Details
            </Link>
            <button
              type="button"
              class="col-3 btn btn-primary btn-block rounded-0 p-0"
            >
              <span className="">Mark Watched</span>
              <img
                src="/src/assets/images/icons/movie-in-watch-history.png"
                alt=""
                className="action-buttons-icon bg-light float-end border border-2 border-dark"
              />
            </button>
            {setupButtons()}
          </div>
        )
      }
    </div>
  );
}
