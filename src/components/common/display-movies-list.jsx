import ActionButtons from "./action-buttons";

export default function DisplayMoviesList({ movies }) {
  return (
    <div className="search-results d-flex flex-row gap-2 justify-content-center flex-wrap col-12">
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className="result-item col-4 m-2 pe-2 rounded d-flex flex-column justify-content-start align-items-center"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
              className="result-cover me-2"
              loading="lazy"
            />
            <div className="result-content">
              <p className="movie-name fw-500">{movie.title}</p>
              <p className="date small">Dec 06 2014</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
