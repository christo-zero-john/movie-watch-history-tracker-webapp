import { useState } from "react";
import TMDB from "../../modules/TMDB";
import Helpers from "../../modules/Helpers";
import DisplayMoviesList from "../common/display-movies-list";
import { useEffect } from "react";
import NavBar from "../common/nav-bar";

export default function SearchMovie() {
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    console.log("search results: ", searchResults);
    setIsSearching(false);
  }, [searchResults]);

  return (
    <div className="pb-3 bg-dark text-light hd-100 overflow-auto no-scrollbar">
      <NavBar active="explore" />
      <form
        className="text-center sticky-top p-2 bg-dark"
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
          className="border-1 rounded-1 p-2 col-9 col-md-6 border-warning text-primary"
          name="search-term"
          type="text"
          required
          placeholder="Search for movies"
        />
        <button
          className="btn btn-primary rounded-0 px-4 mb-1 shadow-light"
          disabled={isSearching}
        >
          Search
        </button>
      </form>
      {
        // If searching then display message. Else display search results
        isSearching && !searchResults ? (
          <p className="">Searching...</p>
        ) : // Display search results if they exist
        !searchResults ? (
          <div className="w-100 bg-warning">
            <p className="alert alert-warning text-center rounded-0">
              Search for something to appear here...
            </p>
          </div>
        ) : // If search results length is 0, Then display message. Else display results.
        searchResults.results.length == 0 ? (
          <p className="">Nothing Found. Search for something else...</p>
        ) : (
          // Display results
          <div>
            <p className="alert alert-success text-uppercase p-0 text-center rounded-0">
              Showing {searchResults.results.length} of{" "}
              {searchResults.total_results} Results
            </p>
            <DisplayMoviesList movies={searchResults.results} />
            <div className="pagination"></div>
            {searchResults.page < searchResults.total_pages ? (
              <div className="alert alert-warning p-0 w-100 text-center rounded-0">
                <p className="d-inline-block m-0">
                  Page {searchResults.page} of {searchResults.total_pages}
                  <button
                    className="btn btn-outline-success text-uppercase d-inline-block mx-2 px-5 rounded-0 shadow-light"
                    onClick={() => {
                      setIsSearching(true);
                      TMDB.searchMovie(
                        searchResults.search_term,
                        searchResults.page + 1,
                        setSearchResults
                      );
                    }}
                    disabled={isSearching}
                  >
                    Load More...
                  </button>
                </p>
              </div>
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
