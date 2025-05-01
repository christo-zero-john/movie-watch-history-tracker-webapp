import { useState } from "react";
import TMDB from "../../modules/TMDB";
import Helpers from "../../modules/helpers";
import DisplayMoviesList from "../common/display-movies-list";
import { useEffect } from "react";

export default function Dashboard() {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    console.log("search results: ", searchResults);
  }, [searchResults]);

  return (
    <div>
      <form
      className="w-fit mx-auto"
        onSubmit={(event) =>
          TMDB.searchMovie(
            Helpers.extractFormData(event, "search-term")["search-term"],
            1,
            setSearchResults
          )
        }
      >
        <input
          className="border-1 rounded p-2 col-9 col-md-6 border-warning"
          name="search-term"
          type="text"
          required
          placeholder="Search for movies"
        />
        <button className="btn btn-primary">Search</button>
      </form>
      {
        // Display search results if they exist
        !searchResults ? (
          <div>
            <h2>Search for movies</h2>
          </div>
        ) : (
          <div>
            <p className="alert alert-success text-uppercase p-0 text-center">
              Showing {searchResults.results.length} of{" "}
              {searchResults.total_results} Results Found
            </p>
            <DisplayMoviesList movies={searchResults.results} />
            <div className="pagination"></div>
            {searchResults.page < searchResults.total_pages ? (
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
            ) : (
              <p className="alert alert-warning p-0 text-center rounded-0">
                End of Results
              </p>
            )}
          </div>
        )
      }
    </div>
  );
}
