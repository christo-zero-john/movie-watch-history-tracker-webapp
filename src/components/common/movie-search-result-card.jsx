import { useState } from "react";
import ActionButtons from "./action-buttons";

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
function getRandomColor() {
  const colors = ["light", "warning", "primary", "danger", "success", "info"];

  return colors[Math.floor(Math.random() * 5)];
}

export default function MovieSearchResultCard({ movie }) {
  const [showActionButtons, setShowActionButtons] = useState(false);

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
      className={`card border border-${getRandomColor()} result-item col-5  col-md-3 col-lg-2 m-2 rounded column justify-content-between`}
    >
      <div className="search-result-item-top">
        <img
          src={movie.poster_path}
          alt={`poster-${movie.title}`}
          className="img-fluid search-result-poster rounded-top"
          loading="lazy"
        />
        <ActionButtons movie={movie} />
      </div>
      <div className="text-start result-content p-2 small">
        <p className="movie-name fw-500 pt-2">{movie.title}</p>
        <p className="date small op-07">{movie.release_date}</p>
      </div>
    </div>
  );
}
