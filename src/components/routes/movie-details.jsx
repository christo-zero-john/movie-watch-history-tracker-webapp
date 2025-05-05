import { useState } from "react";
import { useParams } from "react-router";
import NavBar from "../common/nav-bar";
import ActionButtons from "../common/action-buttons";
import { useEffect } from "react";
import LocalDatabase from "../../modules/LocalDatabase";
import Helpers from "../../modules/helpers";

export default function MovieDetails() {
  let { id } = useParams();
  id = +id;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const temp = await LocalDatabase.getMovieFromDB(id);
      console.log(temp);
      temp.release_date = Helpers.dateToInWords(temp.release_date);
      temp.runtime = Helpers.constructRuntime(temp.runtime);
      setMovie(temp);
    }
    fetchMovie();
  }, []);

  return (
    <div className="">
      <NavBar active="explore" />
      <div className="content p-0 m-0">
        <img
          src={Helpers.constructImagePath(movie?.backdrop_path)}
          alt=""
          className="rounded movie-details-bg-img"
        />

        <div className="ms-md-3 p-md-3">
          <button className="m-md-3 btn" onClick={() => window.history.back()}>
            <img
              src="/src/assets/images/icons/go-back-icon.png"
              alt=""
              className="col-3 float-start"
            />
          </button>
          {
            // Display movie if available
            movie ? (
              <>
                <div className="movie-details-top w-100 md-hd-80 d-md-flex flex-row justify-content-center align-items-center">
                  <img
                    src={Helpers.constructImagePath(movie.poster_path)}
                    alt=""
                    className="col-md-2 col-6 rounded d-block mx-auto my-4"
                  />
                  <div className="movie-details-content col-md-9 col-12 p-3 p-md-3 rounded">
                    <h3 className="name px-2 text-center text-md-start ">
                      {movie.title}{" "}
                      <span className="text-uppercase text-md-start fs-6 small op-07">
                        [{movie.original_title}]
                      </span>{" "}
                    </h3>

                    <div className="d-flex flex-row rating-date-time">
                      <div className="movie-date-time mt-1 d-flex flex-row fs-6 small">
                        <p className="time me-2">
                          {movie.runtime[0]}h {movie.runtime[1]}m
                        </p>
                        <span
                          className={`me-1 p-0 text-${Helpers.getRandomColor()}`}
                        >
                          |
                        </span>
                        <p className="date"> {movie.release_date}</p>
                      </div>
                    </div>

                    <p className="small movie-summary-description">
                      {movie.overview}
                    </p>

                    <ActionButtons movie={movie} expand />

                    <div className="movie-details-genre rounded d-flex flex-row justify-content-start flex-nowrap overflow-auto no-scrollbar">
                      {movie.genres.map((genre) => (
                        <button
                          key={genre.id}
                          className="genre-btn text-orange border-0 m-2 px-3 py-2 rounded text-nowrap"
                        >
                          {genre.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="my-4">
                  <h2 className="fs-5 p-0 text-orange">Recommended Movies</h2>
                  <div className="recommended-movie-items p-3 rounded d-flex flex-row justify-content-start align-items-center flex-nowrap overflow-auto no-scrollbar">
                    {/* <MovieItemcardOriginal /> */}
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
