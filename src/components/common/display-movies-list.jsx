import ActionButtons from "./action-buttons";

export default function DisplayMoviesList({ movies }) {
  function getRandomColor() {
    const colors = ["light", "warning", "primary", "danger", "success", "info"];

    return colors[Math.floor(Math.random() * 5)];
  }

  return (
    <div className="search-results d-flex flex-row gap-2 justify-content-center flex-wrap col-12">
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className={`card border border-${getRandomColor()} result-item col-2 m-2 rounded`}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={`poster-${movie.title}`}
              className="img-fluid"
              loading="lazy"
            />
            <div className="text-start result-content p-2 small">
              <p className="movie-name fw-500">{movie.title}</p>
              <p className="date small">Dec 06 2014</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
