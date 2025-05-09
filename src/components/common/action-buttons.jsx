import { useState } from "react";
import CoreActions from "../../modules/CoreActions";
import LocalDatabase from "../../modules/LocalDatabase";
import { Link } from "react-router";
import { useEffect } from "react";
import Helpers from "../../modules/Helpers";
import Icons from "../../modules/Icons";

/**
 * This component is used to render action buttons of movie cards and movie details page. If the buttons need to be shown, then the expand prop will be true.
 * expand means show all action buttons instead of the icon image
 */
export default function ActionButtons({ movie, expand }) {
  const watcHistory = LocalDatabase.getWatchHistory();
  const wishList = LocalDatabase.getWishList();
  const [reRender, setRerender] = useState(false);
  //   console.log(watcHistory, wishList);

  movie.movie_runtime = Helpers.constructRuntime(movie.runtime);
  movie.release_date = Helpers.dateToInWords(movie.release_date);

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
          type="button"
          className={`more-actions-btn ${
            expand && "col-md-3 col-6 mx-auto mx-md-2"
          } btn btn-primary rounded-0 p-0 my-1`}
          onClick={() => {
            CoreActions.removeFromWatchHistory(movie);
            setRerender((prevState) => -prevState);
          }}
        >
          <p className="d-inline-block pt-1">Mark not watched</p>
          <img
            src={Icons.movie_in_watch_history_icon}
            alt=""
            className="action-buttons-icon bg-light float-end p-1"
          />
        </button>
      );
    } else {
      buttonsJSX.push(
        <button
          type="button"
          className={`more-actions-btn ${
            expand && "col-md-3 col-5 mx-auto mx-md-2"
          } btn btn-primary rounded-0 p-0 my-1`}
          onClick={() => {
            CoreActions.addToWatchHistory(movie);
            setRerender((prevState) => -prevState);
          }}
        >
          <p className="d-inline-block pt-1">Mark Watched</p>
          <img
            src={Icons.add_to_watch_history_icon}
            alt=""
            className="action-buttons-icon bg-light float-end p-1"
          />
        </button>
      );
    }

    if (wishList.includes(movie.id)) {
      buttonsJSX.push(
        <button
          type="button"
          className={`more-actions-btn ${
            expand && "col-md-3 col-5 mx-auto mx-md-2"
          } btn btn-primary rounded-0 p-0 my-1`}
          onClick={() => {
            CoreActions.removeFromWishList(movie);
            setRerender((prevState) => !prevState);
          }}
        >
          <p className="d-inline-block pt-1">Wishlisted</p>
          <img
            src={Icons.movie_in_wishlist_icon}
            alt=""
            className="action-buttons-icon bg-light float-end p-1"
          />
        </button>
      );
    } else {
      buttonsJSX.push(
        <button
          type="button"
          className={`more-actions-btn ${
            expand && "col-md-3 col-5 mx-auto mx-md-2"
          } btn btn-primary rounded-0 p-0 my-1`}
          onClick={() => {
            CoreActions.addToWishList(movie);
            setRerender((prevState) => !prevState);
          }}
        >
          <p className="d-inline-block pt-1">Wishlist</p>
          <img
            src={Icons.add_to_wishlist_icon}
            alt=""
            className="action-buttons-icon bg-light float-end p-1"
          />
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

  console.log(expand);

  return (
    <div>
      {
        // This image lgo is acts as a button to show or hide action buttons. If displaying the 'expand' varient, then there is no need for this icon. So show the icon only if 'expand' == false
        !expand && (
          <img
            src={Icons.more_actions_btn_icon}
            alt=""
            className="more-actions__icon"
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
            }`}
          >
            {
              // If the expand varient, then it means already showing movie details. So hide go to details button

              !expand && (
                <Link
                  to={`/details/${movie.id}`}
                  className="nav-link link-info rounded-0 p-0 fs-6 small"
                >
                  <button
                    type="button"
                    className={`more-actions-btn ${
                      expand && "col-md-3 col-5 mx-auto mx-md-2"
                    } btn btn-primary rounded-0 p-0`}
                  >
                    <p className="d-inline-block pt-1">Goto Details</p>
                    <img
                      src={Icons.more_details_icon}
                      alt=""
                      className="action-buttons-icon bg-light float-end p-1"
                    />
                  </button>
                </Link>
              )
            }

            {setupButtons()}
          </div>
        )
      }
    </div>
  );
}
