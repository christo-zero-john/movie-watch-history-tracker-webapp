import { useState } from "react";
import TMDB from "../../modules/TMDB";
import Helpers from "../../modules/helpers";
import DisplayMoviesList from "../common/display-movies-list";

export default function Dashboard() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div>
      <form
        onSubmit={(event) =>
          TMDB.searchMovie(
            Helpers.extractFormData(event, "search-term")["search-term"],
            1,
            setSearchResults
          )
        }
      >
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
          <h2>
            Showing {searchResults.results.length} of{" "}
            {searchResults.total_results} Results Found
          </h2>
          <DisplayMoviesList movies={searchResults.results} />
          <div className="pagination"></div>
        </div>
      )}
    </div>
  );
}
