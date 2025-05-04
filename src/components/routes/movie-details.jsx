import { useState } from "react";
import { useParams } from "react-router";
import NavBar from "../common/nav-bar";
import ActionButtons from "../common/action-buttons";
import { useEffect } from "react";
import LocalDatabase from "../../modules/LocalDatabase";
import helpers from "../../modules/helpers";

export default function MovieDetails() {
  let { id } = useParams();
  id = +id;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const temp = await LocalDatabase.getMovieFromDB(id);
      console.log(temp);
      setMovie(temp);
    }
    fetchMovie();
  }, []);

  return (
    <div className="">
      <NavBar active="explore" />
      <div className="content p-0 m-0">
        <img
          src={helpers.constructImagePath(movie?.backdrop_path)}
          alt=""
          className="rounded movie-details-bg-img"
        />

        <div className="ms-3 p-3">
          <button className="m-3 btn">
            <img
              src="/src/assets/images/icons/go-back-icon.png"
              alt=""
              className="go-back-icon"
            />
          </button>
          {
            // Display movie if available
            movie ? (
              <>
                <div className="movie-details-top d-flex flex-row justify-content-center align-items-center">
                  <img
                    src={helpers.constructImagePath(movie.poster_path)}
                    alt=""
                    className="col-2"
                  />
                  <div className="movie-details-content col-md-8 p-md-3 rounded">
                    <h3 className="name text-nowrap px-2">
                      {movie.title}{" "}
                      <span className="text-uppercase fs-6 small op-07">
                        [{movie.original_title}]
                      </span>{" "}
                    </h3>

                    <div className="d-flex flex-row rating-date-time">
                      <div className="movie-date-time mt-1 d-flex flex-row fs-5">
                        <p className="time me-2">1h 52m</p>
                        <p className="date">{movie.release_date}</p>
                      </div>
                    </div>

                    <p className="small movie-summary-description">
                      {movie.overview}
                    </p>

                    <ActionButtons movie={movie} expand />

                    <div className="movie-details-genre rounded d-flex flex-row justify-content-start flex-nowrap overflow-auto no-scrollbar">
                      {movie.genres.map((genre) => (
                        <button className="text-orange border-0 m-2 px-3 py-2 rounded text-nowrap">
                          {genre.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="my-4">
                  <h2 className="fs-5 p-0 text-orange">Recommended Movies</h2>
                  <div className="recommended-movie-items p-3 rounded d-flex flex-row justify-content-start align-items-center flex-nowrap overflow-auto no-scrollbar">
                    <div className="movie-item col-6 col-md-2 me-3">
                      <img
                        src="/src/assets/images/temp/cover-image.jpg"
                        alt=""
                        className="cover-image img-fluid rounded"
                      />

                      <div className="hover-varient ps-2 rounded">
                        <div className="top-side w-fit m-3 ms-auto md-hd-50 d-flex flex-column justify-content-start align-items-center">
                          <img
                            src="/src/assets/images/icons/add-to-watch-history.png"
                            alt=""
                            className="small-icon my-1"
                          />
                          <img
                            src="/src/assets/images/icons/add-to-wishlist.png"
                            alt=""
                            className="small-icon my-1"
                          />
                        </div>

                        <p className="movie-name small">
                          The Last: Naruto the movie
                        </p>
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
                  </div>
                </div>
              </>
            ) : (
              <p className="">Fetching Details...</p>
            )
          }
        </div>
      </div>
    </div>
  );
}
