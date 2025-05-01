import { useState } from "react";
import TMDB from "../../modules/TMDB";
import Helpers from "../../modules/helpers";
import DisplayMoviesList from "../common/display-movies-list";
import { useEffect } from "react";

export default function Dashboard() {
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    console.log("search results: ", searchResults);
    setIsSearching(false);
  }, [searchResults]);

  return (
    <div>
      <form
        className="text-center"
        onSubmit={(event) => {
          TMDB.searchMovie(
            Helpers.extractFormData(event, "search-term")["search-term"],
            1,
            setSearchResults
          );
          setIsSearching(true);
        }}
      >
        <input
          className="border-1 rounded p-2 col-9 col-md-6 border-warning text-primary"
          name="search-term"
          type="text"
          required
          placeholder="Search for movies"
        />
        <button className="btn btn-primary" disabled={isSearching}>
          Search
        </button>
      </form>
      {
        // If searching then display message. Else display search results
        isSearching ? (
          <p className="">Searching...</p>
        ) : // Display search results if they exist
        !searchResults ? (
          <div>
            <h2>Search for movies</h2>
          </div>
        ) : // If search results length is 0, Then display message. Else display results.
        searchResults.results.length == 0 ? (
          <p className="">Nothing Found. Search for something else...</p>
        ) : (
          // Display results
          <div>
            <p className="alert alert-success text-uppercase p-0 text-center">
              Showing {searchResults.results.length} of{" "}
              {searchResults.total_results} Results Found
            </p>
            <DisplayMoviesList movies={searchResults.results} />
            <div className="pagination"></div>
            {searchResults.page < searchResults.total_pages ? (
              <button
                className="btn btn-primary px-5 mx-auto"
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
