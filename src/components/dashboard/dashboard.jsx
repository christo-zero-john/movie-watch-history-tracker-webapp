import { useState } from "react";
import TMDB from "../../modules/TMDB";
import Helpers from "../../modules/helpers";
import DisplayMoviesList from "../common/display-movies-list";
import { Pagination } from "react-bootstrap";
import { useEffect } from "react";

export default function Dashboard() {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    console.log("search results: ", searchResults);
  }, [searchResults]);

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
      {
        // Display search results if they exist
        !searchResults ? (
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
            <button
              className=""
              onClick={() =>
                TMDB.searchMovie(
                  searchResults.search_term,
                  searchResults.page + 1,
                  setSearchResults
                )
              }
            >
              Load More...
            </button>
          </div>
        )
      }
    </div>
  );
}
