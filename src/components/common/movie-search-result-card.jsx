import { useState } from "react";
import ActionButtons from "./action-buttons";
import { Link } from "react-router";
import Helpers from "../../modules/helpers";

const monthInWords = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export default function MovieSearchResultCard({ movie }) {
  const [showActionButtons, setShowActionButtons] = useState(false);

  console.log(Helpers.constructImagePath(movie.poster_path))
  
  if (!movie.poster_path) {
    movie.poster_path = "/src/assets/images/icons/image-placeholder.png";
  } else {
    if (
      !movie.poster_path.includes("http") &&
      !movie.poster_path.includes("image-placeholder")
    ) {
      movie.poster_path = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    }
  }

  const releaseDate = movie.release_date.split("-");
  releaseDate[1] = monthInWords[+releaseDate[1]];
  movie.release_date = releaseDate.reverse().join(" ");
  //   console.log(movie);
  return (
    <div
      className={`card border border-${Helpers.getRandomColor()} result-item col-5  col-md-3 col-lg-2 m-2 rounded column justify-content-between`}
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
