import ActionButtons from "./action-buttons";

export default function DisplayMoviesList({ movies }) {
  return (
    <div className="search-results d-flex flex-row gap-2 justify-content-center flex-wrap col-12">
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className="card rounded-0 p-2 shadow-sm col-12 col-md-3 d-flex flex-row gap-0"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
              className="col-2 col-md-3"
              lazy="true"
            />

            <div className="search-result__details col-9 ms-2 col-md-8">
              <p className="fw-600">{movie.title}</p>
              <button className="btn btn-outline-primary rounded-0 p-0 px-3 small-2">
                Details
              </button>
              <div className="action-buttons float-end">
                <ActionButtons movie={movie} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
