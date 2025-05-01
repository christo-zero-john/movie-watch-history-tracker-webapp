export default function DisplayMoviesList({ movies }) {
  return (
    <div className="search-results">
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        );
      })}
    </div>
  );
}
