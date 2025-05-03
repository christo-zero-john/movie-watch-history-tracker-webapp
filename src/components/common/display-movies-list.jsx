import { useState } from "react";
import ActionButtons from "./action-buttons";
import MovieSearchResultCard from "./movie-search-result-card";
import { Modal, Button, Image } from "react-bootstrap";
import ResultItemDetails from "../search/result-item-details";

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

export default function DisplayMoviesList({ movies }) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <>
      <ResultItemDetails
        show={showDetails}
        handleClose={() => setShowDetails(true)}
      />
      <div className="search-results d-flex flex-row gap-2 justify-content-center flex-wrap col-12">
        {movies.map((movie) => {
          const releaseDate = movie.release_date.split("-");
          // console.log(releaseDate[1]);
          releaseDate[1] = monthInWords[+releaseDate[1]];
          movie.release_date = releaseDate.reverse().join(" ");
          // console.log(movie);
          return (
            <MovieSearchResultCard
              setShow={setShowDetails}
              movie={movie}
              key={movie.id}
            />
          );
        })}
      </div>
    </>
  );
}
