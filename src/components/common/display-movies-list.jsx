import CoreActions from "../../modules/CoreActions";
import ActionButtons from "./action-buttons";

export default function DisplayMoviesList({ movies }) {
  return (
    <div className="search-results d-flex flex-row gap-2 justify-content-center flex-wrap">
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className="card m-2 p-3 shadow-sm col-12 col-md-4"
          >
            <h4>{movie.title}</h4>
            <div className="buttons">
              <button className="btn btn-outline-primary rounded-0 p-0 px-3 fs-6 small">
                Details
              </button>
              <div className="action-buttons  float-end">
                <ActionButtons movie={movie} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
