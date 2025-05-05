import { useState } from "react";
import MovieSearchResultCard from "./movie-search-result-card";

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

export default function DisplayMoviesList({ movies, className = "" }) {
  return (
    <>
      <div
        className={`search-results d-flex flex-row gap-2 flex-wrap col-12 ${className} ${
          !className.includes("justify-content") && "justify-content-center"
        }`}
      >
        {movies.map((movie) => {
          const releaseDate = movie.release_date.split("-");
          // console.log(releaseDate[1]);
          releaseDate[1] = monthInWords[+releaseDate[1]];
          movie.release_date = releaseDate.reverse().join(" ");
          // console.log(movie);
          return <MovieSearchResultCard movie={movie} key={movie.id} />;
        })}
      </div>
    </>
  );
}
