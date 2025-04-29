export class SearchMovie {
  constructor() {
    window.searchOptions = ["name"];
    window.addOrRemoveSearchOption = this.addOrRemoveSearchOption;
  }

  openSearchForm() {
    window.offcanvas.setTitle("Search a Movie");
    window.offcanvas.setContent(`
        <img
            src="./src/assets/images/bg-slideshow/img 0.jpg"
            alt="dynamic-background"
            class="bg-slideshow-img"
          />

        <div class="content">
            <!-- movie search form -->
            <div class="form-section ms-md-5 mt-3">
                <form action="" class="" onsubmit="window.searchMovie.searchMovieHandler(event)">
                    <input
                        type="text"
                        id="movie-search-term"
                        class="col-9 col-md-10 bg-transparent border-0 border-bottom border-3 placeholder-light text-light fs-5 fw-100"
                        placeholder="SEARCH FOR ANYTHING"
                    />
                    <button
                        class="btn search-form-btn fs-5 fw-600 px-3 py-1 ms-2"
                        type="submit"
                        id="search-movie-btn"
                    >
                        GO
                    </button>
                </form>               

            <div class="search-results w-100" id="movie-search-result">
              <h4 class="nothing col-md-7 op-07 mx-4 mx-md-auto mt-5 pt-5">
                Search for something to appear here.... <br />
                You can also choose what to search for in the options....
              </h4>
            </div>

        </div>    
    `);

    window.offcanvas.show();
  }

  /**
   * Add or remove search option from the global window.searchOptions object.
   * Also an 'active' class is added or removed from the search option button that is clicked.
   * Available search options: ['name', 'description', 'genres', 'cast-crew', 'release-date', 'keywords', 'production-companies', 'language']
   */
  addOrRemoveSearchOption(event, option) {
    if (window.searchOptions.includes(option)) {
      let index = window.searchOptions.indexOf(option);
      window.searchOptions.splice(index, 1);

      // We can pass null as event to add or remove an option dynamically from other methods javascript. So to prevent an error in such case we should explicitly check whether the evnt has happened or not. Add or Remove class 'selected' from the button only if we got a valid event.

      event && event.target.classList.remove("selected");
    } else {
      window.searchOptions.push(option);
      event && event.target.classList.add("selected");
    }
    if (window.searchOptions.length <= 0) {
      window.searchOptions.push("name");
      document.getElementById("name-option").classList.add("selected");
    }
    console.log(window.searchOptions);
  }

  async searchMovieHandler(event) {
    event.preventDefault();
    let searchTerm = document.getElementById("movie-search-term").value;
    let searchResultDiv = document.getElementById("movie-search-result");
    if (searchTerm.length < 1) {
      window.confirm("Search term too short. Atleast 1 character required");
    } else {
      searchResultDiv.innerHTML = `Searching for ${searchTerm}...`;
      let results = await this.getResults(searchTerm);
      this.displaySearchResults(results);
    }
  }

  async getResults(searchTerm) {
    // Fetch search results from tmdb
    let searchResponse = [];
    let searchResults = [];
    // search for movie, construct search results as HTML, return results

    searchResponse = await this.searchMovies(searchTerm);

    searchResponse.results.forEach((result) => {
      // console.log(result);
      searchResults.push(this.constructMovieItem(result));
    });

    return searchResults;
  }

  async searchMovies(searchTerm) {
    searchTerm = encodeURIComponent(searchTerm);
    console.log("Searching for ", searchTerm);

    const token =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzFiMDU4N2E5ODQ5ZDQyOTIyZmQwYzI2YWE0YmY5NiIsIm5iZiI6MTczODM0NTAwMS4yNTIsInN1YiI6IjY3OWQwYTI5YTliNGIxMjhmYjRkMzk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sUL84tE8A-zqqvpXiEqRZ1O70pqBTrjGSCLoskvRA5o";

    const searchURL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`;
    const request = {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };

    try {
      return fetch(searchURL, request)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        });
    } catch (error) {
      window.confirm("Something went wrong. See console for error!!");
      console.log(error);
    }
  }

  constructMovieItem(movie) {
    // This method is used to construct movie item
    console.log(movie);
    const movieItem = {
      id: movie.id,
      name: movie.title,
      duration: 112,
      release_date: ["2014", "DEC", "06"],
      rating: movie.popularity,
      poster_path: movie.poster_image,
      background_image: movie.backdrop_path,
      genres: [],
    };

    return movieItem;
  }

  displaySearchResults(searchResults) {
    console.log("Displaying Search Results: ", searchResults);
    const searchResultDiv = document.getElementById("movie-search-result");
  }
}
