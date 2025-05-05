import { useState } from "react";
import ActionButtons from "./action-buttons";
import { Link } from "react-router";
import Helpers from "../../modules/helpers";

export default function MovieSearchResultCard({ movie }) {
  const [showActionButtons, setShowActionButtons] = useState(false);

  movie.poster_path = Helpers.constructImagePath(movie.poster_path);

  movie.release_date = Helpers.dateToInWords(movie.release_date);

  //   console.log(movie);
  return (
    <div
      className={`card border border-${Helpers.getRandomColor()} result-item col-8 col-md-3 col-lg-2 m-2 rounded column justify-content-between`}
    >
      <div className="search-result-item-top">
        <img
          src={movie.poster_path}
          alt={`poster-${movie.title}`}
          className="img-fluid search-result-poster rounded-top"
          loading="lazy"
        />
        <ActionButtons movie={movie} />
        <Link to={`/details/${movie.id}`}>
          <img
            src="/src/assets/images/icons/more-details.png"
            alt="info"
            className="more-details-icon"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="text-start result-content p-2 small">
        <Link
          href={`/details/${movie.id}`}
          className="nav-link movie-name fw-500 pt-2"
        >
          {movie.title}
        </Link>
        <p className="date small op-07">{movie.release_date}</p>
      </div>
    </div>
  );
}
