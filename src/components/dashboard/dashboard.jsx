import { useState } from "react";
import TMDB from "../../modules/TMDB";

export default function Dashboard() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div>
      <form onSubmit={(event) => TMDB.searchMovie(event, setSearchResults)}>
        <input
          name="search-term"
          type="text"
          required
          placeholder="Search for movies"
        />
        <button>Search</button>
      </form>
      {!searchResults ? (
        <div>
          <h2>Search for movies</h2>
        </div>
      ) : (
        <div>
          <h2>{searchResults.total_results} Results Found</h2>
          <div className="search-results">
            {searchResults.results.map((movie) => {
              return (
                <div key={movie.id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                </div>
              );
            })}
          </div>
          <div className="pagination">
            
          </div>
        </div>
      )}
    </div>
  );
}
