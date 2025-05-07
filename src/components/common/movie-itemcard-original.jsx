import React from "react";
import Icons from "../../modules/Icons";

export default function MovieItemcardOriginal() {
  return (
    <div className="movie-item col-6 col-md-2 me-3">
      <img
        src="../../assets/images/temp/cover-image.jpg"
        alt=""
        className="cover-image img-fluid rounded"
      />

      <div className="hover-varient ps-2 rounded">
        <div className="top-side w-fit m-3 ms-auto md-hd-50 d-flex flex-column justify-content-start align-items-center">
          <img
            src={Icons.add_to_watch_history_icon}
            alt=""
            className="small-icon my-1"
          />
          <img
            src={Icons.add_to_wishlist_icon}
            alt=""
            className="small-icon my-1"
          />
        </div>

        <p className="movie-name small">The Last: Naruto the movie</p>
        <div className="movie-date-time mt-1 d-flex flex-row">
          <p className="time me-2 small">1h 52m</p>
          <p className="date small">Dec 06 2014</p>
        </div>

        <div className="genre d-flex flex-row justify-content-center align-items-center float-end mt-3 me-md-2">
          <p className="mx-1 small text-orange">Action</p>
          <p className="mx-1 small text-orange">Adventure</p>
          <p className="mx-1 small text-orange">Romance</p>
        </div>
      </div>
    </div>
  );
}
